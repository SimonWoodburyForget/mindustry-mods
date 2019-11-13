''' Parsers to help format inputs. '''
from parsec import *
import unittest
from itertools import chain 

concat = lambda p: p.parsecmap(lambda x: "".join(chain.from_iterable(x)))

lbrack = string("[")
rbrack = string("]")
sbrack = (lbrack
          >> concat(many(none_of("]")))
          << rbrack)

ssbrack = (sbrack << sbrack) | sbrack

ignore_sbrack = (optional(ssbrack)
                 >> concat(many(none_of("[")
                                << optional(ssbrack))))


class TestBracks(unittest.TestCase):

    def test_bracket(self):
        self.assertEqual(lbrack.parse("["), "[")
        self.assertEqual(sbrack.parse("[abc]"), "abc")
        self.assertEqual(ignore_sbrack.parse("[abc]"), "")
        self.assertEqual(ignore_sbrack.parse("x[abc]"), "x")
        self.assertEqual(ignore_sbrack.parse("x[abc]y"), "xy")
        self.assertEqual(ignore_sbrack.parse("[abc]y"), "y")
        self.assertEqual(ignore_sbrack.parse("[a]y[b]x[c]"), "yx")
        self.assertEqual(ignore_sbrack.parse("[a] [b]x[c]"), " x")
        self.assertEqual(ignore_sbrack.parse("[a][b]x[c]"), "x")
        x = "[#b][USMP] [royal]mac[white]down[scarlet]two"
        self.assertEqual(ignore_sbrack.parse(x), " macdowntwo")

if __name__ == "__main__":
    unittest.main()
