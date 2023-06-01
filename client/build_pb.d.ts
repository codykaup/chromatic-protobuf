// package: chromatic_capture_proto
// file: build.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BuildRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): BuildRequest;
    getCaptureCount(): number;
    setCaptureCount(value: number): BuildRequest;
    getTraceHeader(): string;
    setTraceHeader(value: string): BuildRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BuildRequest): BuildRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildRequest;
    static deserializeBinaryFromReader(message: BuildRequest, reader: jspb.BinaryReader): BuildRequest;
}

export namespace BuildRequest {
    export type AsObject = {
        id: number,
        captureCount: number,
        traceHeader: string,
    }
}

export class BuildResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): BuildResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BuildResponse): BuildResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildResponse;
    static deserializeBinaryFromReader(message: BuildResponse, reader: jspb.BinaryReader): BuildResponse;
}

export namespace BuildResponse {
    export type AsObject = {
        status: string,
    }
}
