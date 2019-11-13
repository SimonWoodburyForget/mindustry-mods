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

ignore_sbrack = (optional(sbrack)
                 >> concat(many(none_of("[")
                                << optional(sbrack))))


class TestBracks(unittest.TestCase):

    def test_bracket(self):
        self.assertEqual(lbrack.parse("["), "[")
        self.assertEqual(sbrack.parse("[abc]"), "abc")
        self.assertEqual(ignore_sbrack.parse("[abc]"), "")
        self.assertEqual(ignore_sbrack.parse("x[abc]"), "x")
        self.assertEqual(ignore_sbrack.parse("x[abc]y"), "xy")
        self.assertEqual(ignore_sbrack.parse("[abc]y"), "y")

if __name__ == "__main__":
    unittest.main()
