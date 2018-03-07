import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace mapr. */
    namespace mapr {

        /** Namespace maprdb. */
        namespace maprdb {

            /** Namespace grpc. */
            namespace grpc {

                /** Represents a MapRDbServer */
                class MapRDbServer extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new MapRDbServer service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new MapRDbServer service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MapRDbServer;

                    /**
                     * Calls CreateTable.
                     * @param request CreateTableRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CreateTableResponse
                     */
                    public createTable(request: com.mapr.maprdb.grpc.ICreateTableRequest, callback: com.mapr.maprdb.grpc.MapRDbServer.CreateTableCallback): void;

                    /**
                     * Calls CreateTable.
                     * @param request CreateTableRequest message or plain object
                     * @returns Promise
                     */
                    public createTable(request: com.mapr.maprdb.grpc.ICreateTableRequest): Promise<com.mapr.maprdb.grpc.CreateTableResponse>;

                    /**
                     * Calls DeleteTable.
                     * @param request DeleteTableRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DeleteTableResponse
                     */
                    public deleteTable(request: com.mapr.maprdb.grpc.IDeleteTableRequest, callback: com.mapr.maprdb.grpc.MapRDbServer.DeleteTableCallback): void;

                    /**
                     * Calls DeleteTable.
                     * @param request DeleteTableRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTable(request: com.mapr.maprdb.grpc.IDeleteTableRequest): Promise<com.mapr.maprdb.grpc.DeleteTableResponse>;

                    /**
                     * Calls TableExists.
                     * @param request TableExistsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TableExistsResponse
                     */
                    public tableExists(request: com.mapr.maprdb.grpc.ITableExistsRequest, callback: com.mapr.maprdb.grpc.MapRDbServer.TableExistsCallback): void;

                    /**
                     * Calls TableExists.
                     * @param request TableExistsRequest message or plain object
                     * @returns Promise
                     */
                    public tableExists(request: com.mapr.maprdb.grpc.ITableExistsRequest): Promise<com.mapr.maprdb.grpc.TableExistsResponse>;

                    /**
                     * Calls InsertOrReplace.
                     * @param request InsertOrReplaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InsertOrReplaceResponse
                     */
                    public insertOrReplace(request: com.mapr.maprdb.grpc.IInsertOrReplaceRequest, callback: com.mapr.maprdb.grpc.MapRDbServer.InsertOrReplaceCallback): void;

                    /**
                     * Calls InsertOrReplace.
                     * @param request InsertOrReplaceRequest message or plain object
                     * @returns Promise
                     */
                    public insertOrReplace(request: com.mapr.maprdb.grpc.IInsertOrReplaceRequest): Promise<com.mapr.maprdb.grpc.InsertOrReplaceResponse>;

                    /**
                     * Calls FindById.
                     * @param request FindByIdRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FindByIdResponse
                     */
                    public findById(request: com.mapr.maprdb.grpc.IFindByIdRequest, callback: com.mapr.maprdb.grpc.MapRDbServer.FindByIdCallback): void;

                    /**
                     * Calls FindById.
                     * @param request FindByIdRequest message or plain object
                     * @returns Promise
                     */
                    public findById(request: com.mapr.maprdb.grpc.IFindByIdRequest): Promise<com.mapr.maprdb.grpc.FindByIdResponse>;

                    /**
                     * Calls Find.
                     * @param request FindRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FindResponse
                     */
                    public find(request: com.mapr.maprdb.grpc.IFindRequest, callback: com.mapr.maprdb.grpc.MapRDbServer.FindCallback): void;

                    /**
                     * Calls Find.
                     * @param request FindRequest message or plain object
                     * @returns Promise
                     */
                    public find(request: com.mapr.maprdb.grpc.IFindRequest): Promise<com.mapr.maprdb.grpc.FindResponse>;
                }

                namespace MapRDbServer {

                    /**
                     * Callback as used by {@link com.mapr.maprdb.grpc.MapRDbServer#createTable}.
                     * @param error Error, if any
                     * @param [response] CreateTableResponse
                     */
                    type CreateTableCallback = (error: (Error|null), response?: com.mapr.maprdb.grpc.CreateTableResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.maprdb.grpc.MapRDbServer#deleteTable}.
                     * @param error Error, if any
                     * @param [response] DeleteTableResponse
                     */
                    type DeleteTableCallback = (error: (Error|null), response?: com.mapr.maprdb.grpc.DeleteTableResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.maprdb.grpc.MapRDbServer#tableExists}.
                     * @param error Error, if any
                     * @param [response] TableExistsResponse
                     */
                    type TableExistsCallback = (error: (Error|null), response?: com.mapr.maprdb.grpc.TableExistsResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.maprdb.grpc.MapRDbServer#insertOrReplace}.
                     * @param error Error, if any
                     * @param [response] InsertOrReplaceResponse
                     */
                    type InsertOrReplaceCallback = (error: (Error|null), response?: com.mapr.maprdb.grpc.InsertOrReplaceResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.maprdb.grpc.MapRDbServer#findById}.
                     * @param error Error, if any
                     * @param [response] FindByIdResponse
                     */
                    type FindByIdCallback = (error: (Error|null), response?: com.mapr.maprdb.grpc.FindByIdResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.maprdb.grpc.MapRDbServer#find}.
                     * @param error Error, if any
                     * @param [response] FindResponse
                     */
                    type FindCallback = (error: (Error|null), response?: com.mapr.maprdb.grpc.FindResponse) => void;
                }

                /**
                 * RPC response codes
                 *
                 * TODO: Reorder enum values before release
                 */
                enum ErrorCode {
                    NO_ERROR = 0,
                    UNKNOWN_EXCEPTION = 10,
                    UNKNOWN_PAYLOAD_ENCODING = 20,
                    CLUSTER_NOT_FOUND = 30,
                    PATH_NOT_FOUND = 40,
                    TABLE_NOT_FOUND = 50,
                    TABLE_ALREADY_EXISTS = 51,
                    DOCUMENT_ALREADY_EXISTS = 52,
                    DOCUMENT_NOT_FOUND = 53,
                    ENCODING_ERROR = 60,
                    DECODING_ERROR = 61,
                    UNRECOGNIZED_INSERT_MODE = 62
                }

                /** Properties of a RpcError. */
                interface IRpcError {

                    /** Error code for the RPC. `NO_ERROR` indicates RPC completed successfully */
                    errCode?: (com.mapr.maprdb.grpc.ErrorCode|null);

                    /** NULL if `err` is `NO_ERROR` */
                    errorMessage?: (string|null);

                    /** NULL if `err` is `NO_ERROR` */
                    javaStackTrace?: (string|null);
                }

                /**
                 * Protobuf message that encapsulates RPC operation error, if any
                 * Each RPC response should include RpcError message with `NO_ERROR` indicating success
                 */
                class RpcError implements IRpcError {

                    /**
                     * Constructs a new RpcError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IRpcError);

                    /** Error code for the RPC. `NO_ERROR` indicates RPC completed successfully */
                    public errCode: com.mapr.maprdb.grpc.ErrorCode;

                    /** NULL if `err` is `NO_ERROR` */
                    public errorMessage: string;

                    /** NULL if `err` is `NO_ERROR` */
                    public javaStackTrace: string;

                    /**
                     * Creates a new RpcError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RpcError instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IRpcError): com.mapr.maprdb.grpc.RpcError;

                    /**
                     * Encodes the specified RpcError message. Does not implicitly {@link com.mapr.maprdb.grpc.RpcError.verify|verify} messages.
                     * @param message RpcError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IRpcError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RpcError message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.RpcError.verify|verify} messages.
                     * @param message RpcError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IRpcError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RpcError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RpcError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.RpcError;

                    /**
                     * Decodes a RpcError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RpcError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.RpcError;

                    /**
                     * Verifies a RpcError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RpcError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RpcError
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.RpcError;

                    /**
                     * Creates a plain object from a RpcError message. Also converts values to other types if specified.
                     * @param message RpcError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.RpcError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RpcError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /**
                 * ENUM indicating the encoding scheme of the OJAI objects in RPC request/response.
                 * Currently only JSON encoding is supported.
                 */
                enum PayloadEncoding {
                    JSON_ENCODING = 0
                }

                /** Properties of a CreateTableRequest. */
                interface ICreateTableRequest {

                    /** CreateTableRequest tablePath */
                    tablePath?: (string|null);
                }

                /** Represents a CreateTableRequest. */
                class CreateTableRequest implements ICreateTableRequest {

                    /**
                     * Constructs a new CreateTableRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.ICreateTableRequest);

                    /** CreateTableRequest tablePath. */
                    public tablePath: string;

                    /**
                     * Creates a new CreateTableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTableRequest instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.ICreateTableRequest): com.mapr.maprdb.grpc.CreateTableRequest;

                    /**
                     * Encodes the specified CreateTableRequest message. Does not implicitly {@link com.mapr.maprdb.grpc.CreateTableRequest.verify|verify} messages.
                     * @param message CreateTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.CreateTableRequest.verify|verify} messages.
                     * @param message CreateTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.CreateTableRequest;

                    /**
                     * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.CreateTableRequest;

                    /**
                     * Verifies a CreateTableRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTableRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTableRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.CreateTableRequest;

                    /**
                     * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
                     * @param message CreateTableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.CreateTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTableResponse. */
                interface ICreateTableResponse {

                    /** CreateTableResponse error */
                    error?: (com.mapr.maprdb.grpc.IRpcError|null);
                }

                /** Represents a CreateTableResponse. */
                class CreateTableResponse implements ICreateTableResponse {

                    /**
                     * Constructs a new CreateTableResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.ICreateTableResponse);

                    /** CreateTableResponse error. */
                    public error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /**
                     * Creates a new CreateTableResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTableResponse instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.ICreateTableResponse): com.mapr.maprdb.grpc.CreateTableResponse;

                    /**
                     * Encodes the specified CreateTableResponse message. Does not implicitly {@link com.mapr.maprdb.grpc.CreateTableResponse.verify|verify} messages.
                     * @param message CreateTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.CreateTableResponse.verify|verify} messages.
                     * @param message CreateTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTableResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.CreateTableResponse;

                    /**
                     * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.CreateTableResponse;

                    /**
                     * Verifies a CreateTableResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTableResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.CreateTableResponse;

                    /**
                     * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
                     * @param message CreateTableResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.CreateTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTableResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTableRequest. */
                interface IDeleteTableRequest {

                    /** DeleteTableRequest tablePath */
                    tablePath?: (string|null);
                }

                /** Represents a DeleteTableRequest. */
                class DeleteTableRequest implements IDeleteTableRequest {

                    /**
                     * Constructs a new DeleteTableRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IDeleteTableRequest);

                    /** DeleteTableRequest tablePath. */
                    public tablePath: string;

                    /**
                     * Creates a new DeleteTableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTableRequest instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IDeleteTableRequest): com.mapr.maprdb.grpc.DeleteTableRequest;

                    /**
                     * Encodes the specified DeleteTableRequest message. Does not implicitly {@link com.mapr.maprdb.grpc.DeleteTableRequest.verify|verify} messages.
                     * @param message DeleteTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IDeleteTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTableRequest message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.DeleteTableRequest.verify|verify} messages.
                     * @param message DeleteTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IDeleteTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.DeleteTableRequest;

                    /**
                     * Decodes a DeleteTableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.DeleteTableRequest;

                    /**
                     * Verifies a DeleteTableRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTableRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTableRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.DeleteTableRequest;

                    /**
                     * Creates a plain object from a DeleteTableRequest message. Also converts values to other types if specified.
                     * @param message DeleteTableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.DeleteTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTableResponse. */
                interface IDeleteTableResponse {

                    /** DeleteTableResponse error */
                    error?: (com.mapr.maprdb.grpc.IRpcError|null);
                }

                /** Represents a DeleteTableResponse. */
                class DeleteTableResponse implements IDeleteTableResponse {

                    /**
                     * Constructs a new DeleteTableResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IDeleteTableResponse);

                    /** DeleteTableResponse error. */
                    public error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /**
                     * Creates a new DeleteTableResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTableResponse instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IDeleteTableResponse): com.mapr.maprdb.grpc.DeleteTableResponse;

                    /**
                     * Encodes the specified DeleteTableResponse message. Does not implicitly {@link com.mapr.maprdb.grpc.DeleteTableResponse.verify|verify} messages.
                     * @param message DeleteTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IDeleteTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTableResponse message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.DeleteTableResponse.verify|verify} messages.
                     * @param message DeleteTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IDeleteTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTableResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.DeleteTableResponse;

                    /**
                     * Decodes a DeleteTableResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.DeleteTableResponse;

                    /**
                     * Verifies a DeleteTableResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTableResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTableResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.DeleteTableResponse;

                    /**
                     * Creates a plain object from a DeleteTableResponse message. Also converts values to other types if specified.
                     * @param message DeleteTableResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.DeleteTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTableResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TableExistsRequest. */
                interface ITableExistsRequest {

                    /** TableExistsRequest tablePath */
                    tablePath?: (string|null);
                }

                /** Represents a TableExistsRequest. */
                class TableExistsRequest implements ITableExistsRequest {

                    /**
                     * Constructs a new TableExistsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.ITableExistsRequest);

                    /** TableExistsRequest tablePath. */
                    public tablePath: string;

                    /**
                     * Creates a new TableExistsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableExistsRequest instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.ITableExistsRequest): com.mapr.maprdb.grpc.TableExistsRequest;

                    /**
                     * Encodes the specified TableExistsRequest message. Does not implicitly {@link com.mapr.maprdb.grpc.TableExistsRequest.verify|verify} messages.
                     * @param message TableExistsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.ITableExistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableExistsRequest message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.TableExistsRequest.verify|verify} messages.
                     * @param message TableExistsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.ITableExistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableExistsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableExistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.TableExistsRequest;

                    /**
                     * Decodes a TableExistsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableExistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.TableExistsRequest;

                    /**
                     * Verifies a TableExistsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TableExistsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TableExistsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.TableExistsRequest;

                    /**
                     * Creates a plain object from a TableExistsRequest message. Also converts values to other types if specified.
                     * @param message TableExistsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.TableExistsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableExistsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TableExistsResponse. */
                interface ITableExistsResponse {

                    /** `NO_ERROR` if the table exists, `TABLE_NOT_FOUND` otherwise */
                    error?: (com.mapr.maprdb.grpc.IRpcError|null);
                }

                /** Represents a TableExistsResponse. */
                class TableExistsResponse implements ITableExistsResponse {

                    /**
                     * Constructs a new TableExistsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.ITableExistsResponse);

                    /** `NO_ERROR` if the table exists, `TABLE_NOT_FOUND` otherwise */
                    public error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /**
                     * Creates a new TableExistsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableExistsResponse instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.ITableExistsResponse): com.mapr.maprdb.grpc.TableExistsResponse;

                    /**
                     * Encodes the specified TableExistsResponse message. Does not implicitly {@link com.mapr.maprdb.grpc.TableExistsResponse.verify|verify} messages.
                     * @param message TableExistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.ITableExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableExistsResponse message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.TableExistsResponse.verify|verify} messages.
                     * @param message TableExistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.ITableExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableExistsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.TableExistsResponse;

                    /**
                     * Decodes a TableExistsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.TableExistsResponse;

                    /**
                     * Verifies a TableExistsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TableExistsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TableExistsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.TableExistsResponse;

                    /**
                     * Creates a plain object from a TableExistsResponse message. Also converts values to other types if specified.
                     * @param message TableExistsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.TableExistsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableExistsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** InsertMode enum. */
                enum InsertMode {
                    INSERT_OR_REPLACE = 0,
                    INSERT = 1,
                    REPLACE = 2
                }

                /** Properties of an InsertOrReplaceRequest. */
                interface IInsertOrReplaceRequest {

                    /** InsertOrReplaceRequest tablePath */
                    tablePath?: (string|null);

                    /** InsertOrReplaceRequest insertMode */
                    insertMode?: (com.mapr.maprdb.grpc.InsertMode|null);

                    /** InsertOrReplaceRequest payloadEncoding */
                    payloadEncoding?: (com.mapr.maprdb.grpc.PayloadEncoding|null);

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    jsonDocument?: (string|null);
                }

                /** Represents an InsertOrReplaceRequest. */
                class InsertOrReplaceRequest implements IInsertOrReplaceRequest {

                    /**
                     * Constructs a new InsertOrReplaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IInsertOrReplaceRequest);

                    /** InsertOrReplaceRequest tablePath. */
                    public tablePath: string;

                    /** InsertOrReplaceRequest insertMode. */
                    public insertMode: com.mapr.maprdb.grpc.InsertMode;

                    /** InsertOrReplaceRequest payloadEncoding. */
                    public payloadEncoding: com.mapr.maprdb.grpc.PayloadEncoding;

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    public jsonDocument: string;

                    /**
                     * Creates a new InsertOrReplaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsertOrReplaceRequest instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IInsertOrReplaceRequest): com.mapr.maprdb.grpc.InsertOrReplaceRequest;

                    /**
                     * Encodes the specified InsertOrReplaceRequest message. Does not implicitly {@link com.mapr.maprdb.grpc.InsertOrReplaceRequest.verify|verify} messages.
                     * @param message InsertOrReplaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IInsertOrReplaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsertOrReplaceRequest message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.InsertOrReplaceRequest.verify|verify} messages.
                     * @param message InsertOrReplaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IInsertOrReplaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsertOrReplaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsertOrReplaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.InsertOrReplaceRequest;

                    /**
                     * Decodes an InsertOrReplaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsertOrReplaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.InsertOrReplaceRequest;

                    /**
                     * Verifies an InsertOrReplaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsertOrReplaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsertOrReplaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.InsertOrReplaceRequest;

                    /**
                     * Creates a plain object from an InsertOrReplaceRequest message. Also converts values to other types if specified.
                     * @param message InsertOrReplaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.InsertOrReplaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsertOrReplaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InsertOrReplaceResponse. */
                interface IInsertOrReplaceResponse {

                    /** InsertOrReplaceResponse error */
                    error?: (com.mapr.maprdb.grpc.IRpcError|null);
                }

                /** Represents an InsertOrReplaceResponse. */
                class InsertOrReplaceResponse implements IInsertOrReplaceResponse {

                    /**
                     * Constructs a new InsertOrReplaceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IInsertOrReplaceResponse);

                    /** InsertOrReplaceResponse error. */
                    public error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /**
                     * Creates a new InsertOrReplaceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsertOrReplaceResponse instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IInsertOrReplaceResponse): com.mapr.maprdb.grpc.InsertOrReplaceResponse;

                    /**
                     * Encodes the specified InsertOrReplaceResponse message. Does not implicitly {@link com.mapr.maprdb.grpc.InsertOrReplaceResponse.verify|verify} messages.
                     * @param message InsertOrReplaceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IInsertOrReplaceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsertOrReplaceResponse message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.InsertOrReplaceResponse.verify|verify} messages.
                     * @param message InsertOrReplaceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IInsertOrReplaceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsertOrReplaceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsertOrReplaceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.InsertOrReplaceResponse;

                    /**
                     * Decodes an InsertOrReplaceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsertOrReplaceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.InsertOrReplaceResponse;

                    /**
                     * Verifies an InsertOrReplaceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsertOrReplaceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsertOrReplaceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.InsertOrReplaceResponse;

                    /**
                     * Creates a plain object from an InsertOrReplaceResponse message. Also converts values to other types if specified.
                     * @param message InsertOrReplaceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.InsertOrReplaceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsertOrReplaceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindByIdRequest. */
                interface IFindByIdRequest {

                    /** FindByIdRequest tablePath */
                    tablePath?: (string|null);

                    /** FindByIdRequest payloadEncoding */
                    payloadEncoding?: (com.mapr.maprdb.grpc.PayloadEncoding|null);

                    /**
                     * Contains JSON encoded OJAI Document with "_id" field if the payload_encoding is `JSON_ENCODING`
                     * e.g. {"_id": "user0001"}, or {"_id": {"$binary": "dXNlcjAwMDE="}}
                     */
                    jsonDocument?: (string|null);
                }

                /** Represents a FindByIdRequest. */
                class FindByIdRequest implements IFindByIdRequest {

                    /**
                     * Constructs a new FindByIdRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IFindByIdRequest);

                    /** FindByIdRequest tablePath. */
                    public tablePath: string;

                    /** FindByIdRequest payloadEncoding. */
                    public payloadEncoding: com.mapr.maprdb.grpc.PayloadEncoding;

                    /**
                     * Contains JSON encoded OJAI Document with "_id" field if the payload_encoding is `JSON_ENCODING`
                     * e.g. {"_id": "user0001"}, or {"_id": {"$binary": "dXNlcjAwMDE="}}
                     */
                    public jsonDocument: string;

                    /**
                     * Creates a new FindByIdRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindByIdRequest instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IFindByIdRequest): com.mapr.maprdb.grpc.FindByIdRequest;

                    /**
                     * Encodes the specified FindByIdRequest message. Does not implicitly {@link com.mapr.maprdb.grpc.FindByIdRequest.verify|verify} messages.
                     * @param message FindByIdRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IFindByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindByIdRequest message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.FindByIdRequest.verify|verify} messages.
                     * @param message FindByIdRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IFindByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindByIdRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.FindByIdRequest;

                    /**
                     * Decodes a FindByIdRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.FindByIdRequest;

                    /**
                     * Verifies a FindByIdRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindByIdRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindByIdRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.FindByIdRequest;

                    /**
                     * Creates a plain object from a FindByIdRequest message. Also converts values to other types if specified.
                     * @param message FindByIdRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.FindByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindByIdRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindByIdResponse. */
                interface IFindByIdResponse {

                    /** FindByIdResponse error */
                    error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /** FindByIdResponse payloadEncoding */
                    payloadEncoding?: (com.mapr.maprdb.grpc.PayloadEncoding|null);

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    jsonDocument?: (string|null);
                }

                /** Represents a FindByIdResponse. */
                class FindByIdResponse implements IFindByIdResponse {

                    /**
                     * Constructs a new FindByIdResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IFindByIdResponse);

                    /** FindByIdResponse error. */
                    public error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /** FindByIdResponse payloadEncoding. */
                    public payloadEncoding: com.mapr.maprdb.grpc.PayloadEncoding;

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    public jsonDocument: string;

                    /**
                     * Creates a new FindByIdResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindByIdResponse instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IFindByIdResponse): com.mapr.maprdb.grpc.FindByIdResponse;

                    /**
                     * Encodes the specified FindByIdResponse message. Does not implicitly {@link com.mapr.maprdb.grpc.FindByIdResponse.verify|verify} messages.
                     * @param message FindByIdResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IFindByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindByIdResponse message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.FindByIdResponse.verify|verify} messages.
                     * @param message FindByIdResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IFindByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindByIdResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindByIdResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.FindByIdResponse;

                    /**
                     * Decodes a FindByIdResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindByIdResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.FindByIdResponse;

                    /**
                     * Verifies a FindByIdResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindByIdResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindByIdResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.FindByIdResponse;

                    /**
                     * Creates a plain object from a FindByIdResponse message. Also converts values to other types if specified.
                     * @param message FindByIdResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.FindByIdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindByIdResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindRequest. */
                interface IFindRequest {

                    /** FindRequest tablePath */
                    tablePath?: (string|null);

                    /** FindRequest payloadEncoding */
                    payloadEncoding?: (com.mapr.maprdb.grpc.PayloadEncoding|null);

                    /** FindRequest includeQueryPlan */
                    includeQueryPlan?: (boolean|null);

                    /** Contains JSON encoded OJAI Query if the payload_encoding is `JSON_ENCODING` */
                    jsonQuery?: (string|null);
                }

                /** Represents a FindRequest. */
                class FindRequest implements IFindRequest {

                    /**
                     * Constructs a new FindRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IFindRequest);

                    /** FindRequest tablePath. */
                    public tablePath: string;

                    /** FindRequest payloadEncoding. */
                    public payloadEncoding: com.mapr.maprdb.grpc.PayloadEncoding;

                    /** FindRequest includeQueryPlan. */
                    public includeQueryPlan: boolean;

                    /** Contains JSON encoded OJAI Query if the payload_encoding is `JSON_ENCODING` */
                    public jsonQuery: string;

                    /**
                     * Creates a new FindRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindRequest instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IFindRequest): com.mapr.maprdb.grpc.FindRequest;

                    /**
                     * Encodes the specified FindRequest message. Does not implicitly {@link com.mapr.maprdb.grpc.FindRequest.verify|verify} messages.
                     * @param message FindRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IFindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindRequest message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.FindRequest.verify|verify} messages.
                     * @param message FindRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IFindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.FindRequest;

                    /**
                     * Decodes a FindRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.FindRequest;

                    /**
                     * Verifies a FindRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.FindRequest;

                    /**
                     * Creates a plain object from a FindRequest message. Also converts values to other types if specified.
                     * @param message FindRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.FindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindResponse. */
                interface IFindResponse {

                    /** FindResponse error */
                    error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /** FindResponse payloadEncoding */
                    payloadEncoding?: (com.mapr.maprdb.grpc.PayloadEncoding|null);

                    /** Contains JSON encoded OJAI QueryPlan if the payload_encoding is `JSON_ENCODING` */
                    jsonQueryPlan?: (string|null);

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    jsonDocument?: (string|null);
                }

                /**
                 * Results of Find() RPCs are streamed to the clients, with each FindResponse containing
                 * one OJAI document. If the `include_query_plan` in FindRequest was set to true, the first
                 * FindResponse will contain the query plan instead of OJAI Document
                 */
                class FindResponse implements IFindResponse {

                    /**
                     * Constructs a new FindResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.maprdb.grpc.IFindResponse);

                    /** FindResponse error. */
                    public error?: (com.mapr.maprdb.grpc.IRpcError|null);

                    /** FindResponse payloadEncoding. */
                    public payloadEncoding: com.mapr.maprdb.grpc.PayloadEncoding;

                    /** Contains JSON encoded OJAI QueryPlan if the payload_encoding is `JSON_ENCODING` */
                    public jsonQueryPlan: string;

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    public jsonDocument: string;

                    /** FindResponse data. */
                    public data?: ("jsonQueryPlan"|"jsonDocument");

                    /**
                     * Creates a new FindResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindResponse instance
                     */
                    public static create(properties?: com.mapr.maprdb.grpc.IFindResponse): com.mapr.maprdb.grpc.FindResponse;

                    /**
                     * Encodes the specified FindResponse message. Does not implicitly {@link com.mapr.maprdb.grpc.FindResponse.verify|verify} messages.
                     * @param message FindResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.maprdb.grpc.IFindResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindResponse message, length delimited. Does not implicitly {@link com.mapr.maprdb.grpc.FindResponse.verify|verify} messages.
                     * @param message FindResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.maprdb.grpc.IFindResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.maprdb.grpc.FindResponse;

                    /**
                     * Decodes a FindResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.maprdb.grpc.FindResponse;

                    /**
                     * Verifies a FindResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.mapr.maprdb.grpc.FindResponse;

                    /**
                     * Creates a plain object from a FindResponse message. Also converts values to other types if specified.
                     * @param message FindResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.maprdb.grpc.FindResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
