import { readFileSync } from 'node:fs';

type JsonObject = Record<string, unknown>;

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object'
    && value !== null
    && !Array.isArray(value);
}

function validateStructure(
  template: JsonObject,
  value: JsonObject,
  path = ''
): void {
  for (const key of Object.keys(template)) {
    if (!(key in value)) {
      throw new Error(`Missing config key: ${path}${key}`);
    }

    const templateValue = template[key];
    const actualValue = value[key];

    if (isObject(templateValue)) {
      if (!isObject(actualValue)) {
        throw new Error(`Invalid config key: ${path}${key}`);
      }

      validateStructure(
        templateValue,
        actualValue,
        `${path}${key}.`
      );
    }
  }
}

const example = JSON.parse(
  readFileSync('src/config/default.example.json', 'utf8')
) as JsonObject;

const actual = JSON.parse(
  readFileSync('src/config/default.json', 'utf8')
) as JsonObject;

validateStructure(example, actual);
