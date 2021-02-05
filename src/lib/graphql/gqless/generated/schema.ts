// @ts-nocheck
import * as extensions from '../extensions'
import { lazyGetters } from '@gqless/utils'
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  EnumNode,
  InputNode,
  InputNodeField
} from 'gqless'

export const schema = {
  get Query () {
    return new ObjectNode(
      {
        get stations () {
          return new FieldNode(
            new ArrayNode(schema.Station, false),
            new Arguments({
              get search () {
                return new ArgumentsField(schema.StationSearchInput, true)
              }
            }),
            false
          )
        },
        get stationsByUUID () {
          return new FieldNode(
            new ArrayNode(schema.Station, false),
            new Arguments(
              {
                get uuids () {
                  return new ArgumentsField(
                    new ArrayNode(schema.String, false),
                    false
                  )
                }
              },
              true
            ),
            false
          )
        }
      },
      { name: 'Query', extension: ((extensions as any) || {}).Query }
    )
  },
  get String () {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String
    })
  },
  get StationOrder () {
    return new EnumNode({ name: 'StationOrder' })
  },
  get Station () {
    return new ObjectNode(
      {
        get name () {
          return new FieldNode(schema.String, undefined, false)
        },
        get url () {
          return new FieldNode(schema.String, undefined, false)
        },
        get votes () {
          return new FieldNode(schema.Int, undefined, false)
        },
        get favicon () {
          return new FieldNode(schema.String, undefined, false)
        },
        get homepage () {
          return new FieldNode(schema.String, undefined, false)
        },
        get language () {
          return new FieldNode(schema.String, undefined, false)
        },
        get country () {
          return new FieldNode(schema.String, undefined, false)
        },
        get stationuuid () {
          return new FieldNode(schema.String, undefined, false)
        }
      },
      { name: 'Station', extension: ((extensions as any) || {}).Station }
    )
  },
  get Int () {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int
    })
  },
  get StationSearchInput () {
    return new InputNode(
      {
        get name () {
          return new InputNodeField(schema.String, true)
        },
        get limit () {
          return new InputNodeField(schema.Int, true)
        },
        get reverse () {
          return new InputNodeField(schema.Boolean, true)
        },
        get order () {
          return new InputNodeField(schema.StationOrder, true)
        },
        get country () {
          return new InputNodeField(schema.String, true)
        },
        get language () {
          return new InputNodeField(schema.String, true)
        }
      },
      { name: 'StationSearchInput' }
    )
  },
  get Boolean () {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean
    })
  },
  get CacheControlScope () {
    return new EnumNode({ name: 'CacheControlScope' })
  },
  get Upload () {
    return new ScalarNode({
      name: 'Upload',
      extension: ((extensions as any) || {}).Upload
    })
  },
  get __Schema () {
    return new ObjectNode(
      {
        get description () {
          return new FieldNode(schema.String, undefined, true)
        },
        get types () {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          )
        },
        get queryType () {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get mutationType () {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get subscriptionType () {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get directives () {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          )
        }
      },
      { name: '__Schema', extension: ((extensions as any) || {}).__Schema }
    )
  },
  get __Type () {
    return new ObjectNode(
      {
        get kind () {
          return new FieldNode(schema.__TypeKind, undefined, false)
        },
        get name () {
          return new FieldNode(schema.String, undefined, true)
        },
        get description () {
          return new FieldNode(schema.String, undefined, true)
        },
        get specifiedByUrl () {
          return new FieldNode(schema.String, undefined, true)
        },
        get fields () {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated () {
                return new ArgumentsField(schema.Boolean, true)
              }
            }),
            true
          )
        },
        get interfaces () {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get possibleTypes () {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get enumValues () {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated () {
                return new ArgumentsField(schema.Boolean, true)
              }
            }),
            true
          )
        },
        get inputFields () {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            new Arguments({
              get includeDeprecated () {
                return new ArgumentsField(schema.Boolean, true)
              }
            }),
            true
          )
        },
        get ofType () {
          return new FieldNode(schema.__Type, undefined, true)
        }
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type }
    )
  },
  get __TypeKind () {
    return new EnumNode({ name: '__TypeKind' })
  },
  get __Field () {
    return new ObjectNode(
      {
        get name () {
          return new FieldNode(schema.String, undefined, false)
        },
        get description () {
          return new FieldNode(schema.String, undefined, true)
        },
        get args () {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            new Arguments({
              get includeDeprecated () {
                return new ArgumentsField(schema.Boolean, true)
              }
            }),
            false
          )
        },
        get type () {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get isDeprecated () {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason () {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field }
    )
  },
  get __InputValue () {
    return new ObjectNode(
      {
        get name () {
          return new FieldNode(schema.String, undefined, false)
        },
        get description () {
          return new FieldNode(schema.String, undefined, true)
        },
        get type () {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get defaultValue () {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated () {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason () {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue
      }
    )
  },
  get __EnumValue () {
    return new ObjectNode(
      {
        get name () {
          return new FieldNode(schema.String, undefined, false)
        },
        get description () {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated () {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason () {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue
      }
    )
  },
  get __Directive () {
    return new ObjectNode(
      {
        get name () {
          return new FieldNode(schema.String, undefined, false)
        },
        get description () {
          return new FieldNode(schema.String, undefined, true)
        },
        get isRepeatable () {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get locations () {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          )
        },
        get args () {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        }
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive
      }
    )
  },
  get __DirectiveLocation () {
    return new EnumNode({ name: '__DirectiveLocation' })
  }
}

lazyGetters(schema)
