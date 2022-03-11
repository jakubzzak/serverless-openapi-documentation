import { JSONSchema7 } from "json-schema";
import { OpenAPIV3 } from "openapi-types";

export interface Model {
  name: string;
  description: string;
  contentType: string;
  schema: string | JSONSchema7;
  examples: Array<any>;
  example: object;
}

export interface DefinitionConfig {
  title: string;
  description: string;
  version?: string;
  versions?: Array<Record<string, string>>;
  securitySchemes: OpenAPIV3.SecuritySchemeObject;
  security: Array<OpenAPIV3.SecurityRequirementObject>;
  servers: Array<OpenAPIV3.ServerObject>;
  models: Array<Model>;
}

export enum Format {
  yaml = "yaml",
  json = "json"
}

export interface DefinitionType {
  file: string;
  format: Format;
  indent: number;
}

export interface ServerlessFunctionConfig {
  _functionName: string;
  handler: string;
  description?: string;
  environment?: object;
  events?: Array<any>;
}

export interface RequestParam {
  name: string;
  description: string;
  schema: {
    type: string;
    pattern?: string;
  };
}

// TODO: We could use another TS based OpenAPI project to get type information
// for OpenAPI definitions.
// @see https://github.com/Mermade/awesome-openapi3#parsersmodelsvalidators

// @see https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#operation-object
export interface Operation {
  version?: string | number;
  tags?: Array<string>;
  summary?: string;
  description?: string;
  externalDocs?: any;
  operationId?: string;
  parameters?: Array<ParameterConfig>;
  requestBody?: any;
  responses?: any;
  callbacks?: any;
  deprecated?: boolean;
  security?: Array<any>;
  servers?: Array<any>;
  pathParams?: Array<RequestParam>;
  requestHeaders?: Array<RequestParam>;
  queryParams?: Array<Record<string, unknown>>;
  requestModels?: Record<string, unknown>;
  methodResponses?: Array<Record<string, unknown>>;
}

// @see https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#parameterObject
export interface ParameterConfig {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  description: string;
  required?: boolean;
  schema?: object;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: "form" | "simple";
  explode?: boolean;
  allowReserved?: boolean;
  example?: any;
  examples?: Array<any>;
  content?: Map<string, any>;
}

// FIXME:
export interface Definition {
  openapi: string;
  info?: any;
  versions?: Array<Record<string, string>>;
  servers?: Array<any>;
  paths?: any;
  components?: any;
  security?: Array<any>;
  tags?: Array<any>;
  externalDocs?: any;
}

export interface DocParams {
  version?: string | number;
  deprecated?: boolean;
  pathParams?: Array<RequestParam>;
}

export type ILog = (...str: Array<string>) => void;
