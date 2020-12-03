'''Mindustry square bracket parser.'''
from parsec import *
from itertools import chain 

concat = lambda p: p.parsecmap(lambda x: "".join(chain.from_iterable(x)))

@generate
def sbrack():
    yield string("[")
    content = yield concat(many(sbrack | none_of("]")))
    yield string("]")
    return content

not_sbrack = concat(many(none_of("[")))
ignore_sbrack = concat(many(string('[[').result('[')
                            ^ sbrack.result('')
                            | not_sbrack))


import unittest

class TestBracks(unittest.TestCase):
    def test_bracket(self):
        self.assertEqual(sbrack.parse("[abc]"), "abc")
        self.assertEqual(ignore_sbrack.parse("[abc]"), "")
        self.assertEqual(ignore_sbrack.parse("x[abc]"), "x")
        self.assertEqual(ignore_sbrack.parse("x[abc]y"), "xy")
        self.assertEqual(ignore_sbrack.parse("[abc]y"), "y")
        self.assertEqual(ignore_sbrack.parse("[a]y[b]x[c]"), "yx")
        self.assertEqual(ignore_sbrack.parse("[a] [b]x[c]"), " x")
        self.assertEqual(ignore_sbrack.parse("[a][b]x[c]"), "x")
        self.assertEqual(ignore_sbrack.parse("[a][b][y]x[c]"), "x")
        x = "[#b][USMP] [royal]mac[white]down[scarlet]two"
        self.assertEqual(ignore_sbrack.parse(x), " macdowntwo")
        self.assertEqual(ignore_sbrack.parse('[a[b]c]x'), "x")
        self.assertEqual(ignore_sbrack.parse('[[abc]x'), '[abc]x')
        
if __name__ == "__main__":
    unittest.main()
