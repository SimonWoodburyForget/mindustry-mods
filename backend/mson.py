""" Parser for Mindustry JSON. (uses parsec.py)

The specific implimentation changes to JSON goes as follows:
- `//` maybe used for single line comments;
- `"` quotes aren't required for strings;
- `,` commas aren't required for arrays or objects;
- `:` may be inline with unquoted strings.

This parser doesn't actually currently work as it should.
"""

from parsec import *
from itertools import chain

concat = lambda p: p.parsecmap(lambda x: "".join(chain.from_iterable(x)))
comment = string("//") >> concat(many(none_of("\n"))) << optional(string("\n"))
whitespace =  many(comment | one_of(" \n\s\r\t"))
lexeme = lambda p: p << whitespace

lbrace = lexeme(string('{'))
rbrace = lexeme(string('}'))
lbrack = lexeme(string('['))
rbrack = lexeme(string(']'))
colon = lexeme(string(':'))
comma = lexeme(one_of(','))
true = lexeme(string('true')).result(True)
false = lexeme(string('false')).result(False)
null = lexeme(string('null')).result(None)


def number():
    '''Parse number.'''
    return lexeme(
        regex(r'-?(0|[1-9][0-9]*)([.][0-9]+)?([eE][+-]?[0-9]+)?')
    ).parsecmap(float)

def charseq():
    '''Parse string. (normal string and escaped string)'''
    def string_part():
        '''Parse normal string.'''
        return regex(r'[^"\\]+')

    def string_esc():
        '''Parse escaped string.'''
        return string('\\') >> (
            string('\\')
            | string('/')
            | string('"')
            | string('b').result('\b')
            | string('f').result('\f')
            | string('n').result('\n')
            | string('r').result('\r')
            | string('t').result('\t')
            | regex(r'u[0-9a-fA-F]{4}').parsecmap(lambda s: chr(int(s[1:], 16)))
        )
    return string_part() | string_esc()

@lexeme
@generate
def quoted():
    '''Parse quoted string.'''
    yield string('"')
    body = yield many(charseq())
    yield string('"')
    return ''.join(body)

@generate
def unquoted():
    '''Parse unquoted string.'''
    def string_part():
        return none_of(",\n/h:}]")

    def string_link():
        '''Escape `//` and `:` for links.'''
        return (string("https://")
                | string("http://"))

    def string_comment():
        '''Parse a string that has `/` but not `//`.'''
        return concat(string("/") + none_of("/"))

    strs = yield lexeme(many1(string_link() | string_part() | string_comment()))
    return ''.join(strs).strip()

@generate
def unquotedvalue():
    '''Parse unquoted string specifically for values.'''
    body = yield many(none_of("\n: "))
    return ''.join(body).strip()

@generate
def array():
    '''Parse array element in JSON text.'''
    yield lbrack
    elements = yield sepEndBy(unquoted, one_of(",\n") << whitespace)
    yield rbrack
    return elements

@generate
def object_pair():
    '''Parse object pair in JSON.'''
    key = yield quoted | unquoted
    yield colon
    val = yield value | unquoted | unquotedvalue
    return (key, val)

@generate
def json_object():
    '''Parse JSON object.'''
    yield lbrace
    pairs = yield sepBy(object_pair, comma | whitespace)
    yield rbrace
    return dict(pairs)

value = quoted | number() | json_object | array | true | false | null
jsonc = whitespace >> json_object

def load(text):
    return jsonc.parse(text)





if __name__ == '__main__':

    print(jsonc.parse("""{
  "name": "NISZOgen mod",
  "author": "NISZOgen",
  "description": "Mod dodający nowe przedmioty :D!",
  "version": 1.0
}"""))

    import requests
    r = requests.get("https://raw.githubusercontent.com/ado1928/Fusion-Reactor-mod/master/mod.json")
    
    # ado1928/Fusion-Reactor-mod
    print(jsonc.parse(r.text))
