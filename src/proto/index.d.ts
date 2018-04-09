import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace mapr. */
    namespace mapr {

        /** Namespace data. */
        namespace data {

            /** Namespace db. */
            namespace db {

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
                    public createTable(request: com.mapr.data.db.ICreateTableRequest, callback: com.mapr.data.db.MapRDbServer.CreateTableCallback): void;

                    /**
                     * Calls CreateTable.
                     * @param request CreateTableRequest message or plain object
                     * @returns Promise
                     */
                    public createTable(request: com.mapr.data.db.ICreateTableRequest): Promise<com.mapr.data.db.CreateTableResponse>;

                    /**
                     * Calls DeleteTable.
                     * @param request DeleteTableRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DeleteTableResponse
                     */
                    public deleteTable(request: com.mapr.data.db.IDeleteTableRequest, callback: com.mapr.data.db.MapRDbServer.DeleteTableCallback): void;

                    /**
                     * Calls DeleteTable.
                     * @param request DeleteTableRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTable(request: com.mapr.data.db.IDeleteTableRequest): Promise<com.mapr.data.db.DeleteTableResponse>;

                    /**
                     * Calls TableExists.
                     * @param request TableExistsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TableExistsResponse
                     */
                    public tableExists(request: com.mapr.data.db.ITableExistsRequest, callback: com.mapr.data.db.MapRDbServer.TableExistsCallback): void;

                    /**
                     * Calls TableExists.
                     * @param request TableExistsRequest message or plain object
                     * @returns Promise
                     */
                    public tableExists(request: com.mapr.data.db.ITableExistsRequest): Promise<com.mapr.data.db.TableExistsResponse>;

                    /**
                     * Calls InsertOrReplace.
                     * @param request InsertOrReplaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InsertOrReplaceResponse
                     */
                    public insertOrReplace(request: com.mapr.data.db.IInsertOrReplaceRequest, callback: com.mapr.data.db.MapRDbServer.InsertOrReplaceCallback): void;

                    /**
                     * Calls InsertOrReplace.
                     * @param request InsertOrReplaceRequest message or plain object
                     * @returns Promise
                     */
                    public insertOrReplace(request: com.mapr.data.db.IInsertOrReplaceRequest): Promise<com.mapr.data.db.InsertOrReplaceResponse>;

                    /**
                     * Calls FindById.
                     * @param request FindByIdRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FindByIdResponse
                     */
                    public findById(request: com.mapr.data.db.IFindByIdRequest, callback: com.mapr.data.db.MapRDbServer.FindByIdCallback): void;

                    /**
                     * Calls FindById.
                     * @param request FindByIdRequest message or plain object
                     * @returns Promise
                     */
                    public findById(request: com.mapr.data.db.IFindByIdRequest): Promise<com.mapr.data.db.FindByIdResponse>;

                    /**
                     * Calls Find.
                     * @param request FindRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FindResponse
                     */
                    public find(request: com.mapr.data.db.IFindRequest, callback: com.mapr.data.db.MapRDbServer.FindCallback): void;

                    /**
                     * Calls Find.
                     * @param request FindRequest message or plain object
                     * @returns Promise
                     */
                    public find(request: com.mapr.data.db.IFindRequest): Promise<com.mapr.data.db.FindResponse>;
                }

                namespace MapRDbServer {

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#createTable}.
                     * @param error Error, if any
                     * @param [response] CreateTableResponse
                     */
                    type CreateTableCallback = (error: (Error|null), response?: com.mapr.data.db.CreateTableResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#deleteTable}.
                     * @param error Error, if any
                     * @param [response] DeleteTableResponse
                     */
                    type DeleteTableCallback = (error: (Error|null), response?: com.mapr.data.db.DeleteTableResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#tableExists}.
                     * @param error Error, if any
                     * @param [response] TableExistsResponse
                     */
                    type TableExistsCallback = (error: (Error|null), response?: com.mapr.data.db.TableExistsResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#insertOrReplace}.
                     * @param error Error, if any
                     * @param [response] InsertOrReplaceResponse
                     */
                    type InsertOrReplaceCallback = (error: (Error|null), response?: com.mapr.data.db.InsertOrReplaceResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#findById}.
                     * @param error Error, if any
                     * @param [response] FindByIdResponse
                     */
                    type FindByIdCallback = (error: (Error|null), response?: com.mapr.data.db.FindByIdResponse) => void;

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#find}.
                     * @param error Error, if any
                     * @param [response] FindResponse
                     */
                    type FindCallback = (error: (Error|null), response?: com.mapr.data.db.FindResponse) => void;
                }

                /**
                 * RPC response error codes. POSIX error codes are used where appropriate.
                 *
                 * Extended error codes, those that can not be mapped to a POSIX error code, begins at 256.
                 */
                enum ErrorCode {
                    NO_ERROR = 0,
                    TABLE_NOT_FOUND = 2,
                    IO_ERROR = 5,
                    OUT_OF_MEMORY = 12,
                    ACCESS_DENIED = 13,
                    TABLE_ALREADY_EXISTS = 17,
                    INVALID_ARGUMENT = 22,
                    UNSUPPORTED_OPERATION = 38,
                    UNKNOWN_ERROR = 256,
                    UNKNOWN_PAYLOAD_ENCODING = 260,
                    CLUSTER_NOT_FOUND = 270,
                    PATH_NOT_FOUND = 271,
                    DOCUMENT_ALREADY_EXISTS = 280,
                    DOCUMENT_NOT_FOUND = 281,
                    ENCODING_ERROR = 290,
                    DECODING_ERROR = 291
                }

                /** Properties of a RpcError. */
                interface IRpcError {

                    /** Error code for the RPC. `NO_ERROR` indicates RPC completed successfully */
                    errCode?: (com.mapr.data.db.ErrorCode|null);

                    /** NULL if `err` is `NO_ERROR` */
                    errorMessage?: (string|null);

                    /** NULL if `err` is `NO_ERROR` */
                    javaStackTrace?: (string|null);
                }

                /**
                 * Protobuf message that encapsulates RPC operation error, if any.
                 * Each RPC response should include RpcError message, with `NO_ERROR` indicating success
                 */
                class RpcError implements IRpcError {

                    /**
                     * Constructs a new RpcError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.IRpcError);

                    /** Error code for the RPC. `NO_ERROR` indicates RPC completed successfully */
                    public errCode: com.mapr.data.db.ErrorCode;

                    /** NULL if `err` is `NO_ERROR` */
                    public errorMessage: string;

                    /** NULL if `err` is `NO_ERROR` */
                    public javaStackTrace: string;

                    /**
                     * Creates a new RpcError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RpcError instance
                     */
                    public static create(properties?: com.mapr.data.db.IRpcError): com.mapr.data.db.RpcError;

                    /**
                     * Encodes the specified RpcError message. Does not implicitly {@link com.mapr.data.db.RpcError.verify|verify} messages.
                     * @param message RpcError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IRpcError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RpcError message, length delimited. Does not implicitly {@link com.mapr.data.db.RpcError.verify|verify} messages.
                     * @param message RpcError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IRpcError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RpcError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RpcError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.RpcError;

                    /**
                     * Decodes a RpcError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RpcError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.RpcError;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.RpcError;

                    /**
                     * Creates a plain object from a RpcError message. Also converts values to other types if specified.
                     * @param message RpcError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.RpcError, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    UNKNOWN_ENCODING = 0,
                    JSON_ENCODING = 1
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
                    constructor(properties?: com.mapr.data.db.ICreateTableRequest);

                    /** CreateTableRequest tablePath. */
                    public tablePath: string;

                    /**
                     * Creates a new CreateTableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTableRequest instance
                     */
                    public static create(properties?: com.mapr.data.db.ICreateTableRequest): com.mapr.data.db.CreateTableRequest;

                    /**
                     * Encodes the specified CreateTableRequest message. Does not implicitly {@link com.mapr.data.db.CreateTableRequest.verify|verify} messages.
                     * @param message CreateTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.CreateTableRequest.verify|verify} messages.
                     * @param message CreateTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.CreateTableRequest;

                    /**
                     * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.CreateTableRequest;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.CreateTableRequest;

                    /**
                     * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
                     * @param message CreateTableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.CreateTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTableResponse. */
                interface ICreateTableResponse {

                    /**
                     * `NO_ERROR` - if the table was created successfully,
                     * `TABLE_ALREADY_EXISTS` - if a table with the same path already exists
                     */
                    error?: (com.mapr.data.db.IRpcError|null);
                }

                /** Represents a CreateTableResponse. */
                class CreateTableResponse implements ICreateTableResponse {

                    /**
                     * Constructs a new CreateTableResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.ICreateTableResponse);

                    /**
                     * `NO_ERROR` - if the table was created successfully,
                     * `TABLE_ALREADY_EXISTS` - if a table with the same path already exists
                     */
                    public error?: (com.mapr.data.db.IRpcError|null);

                    /**
                     * Creates a new CreateTableResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTableResponse instance
                     */
                    public static create(properties?: com.mapr.data.db.ICreateTableResponse): com.mapr.data.db.CreateTableResponse;

                    /**
                     * Encodes the specified CreateTableResponse message. Does not implicitly {@link com.mapr.data.db.CreateTableResponse.verify|verify} messages.
                     * @param message CreateTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.CreateTableResponse.verify|verify} messages.
                     * @param message CreateTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTableResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.CreateTableResponse;

                    /**
                     * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.CreateTableResponse;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.CreateTableResponse;

                    /**
                     * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
                     * @param message CreateTableResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.CreateTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: com.mapr.data.db.IDeleteTableRequest);

                    /** DeleteTableRequest tablePath. */
                    public tablePath: string;

                    /**
                     * Creates a new DeleteTableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTableRequest instance
                     */
                    public static create(properties?: com.mapr.data.db.IDeleteTableRequest): com.mapr.data.db.DeleteTableRequest;

                    /**
                     * Encodes the specified DeleteTableRequest message. Does not implicitly {@link com.mapr.data.db.DeleteTableRequest.verify|verify} messages.
                     * @param message DeleteTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IDeleteTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTableRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.DeleteTableRequest.verify|verify} messages.
                     * @param message DeleteTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IDeleteTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.DeleteTableRequest;

                    /**
                     * Decodes a DeleteTableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.DeleteTableRequest;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.DeleteTableRequest;

                    /**
                     * Creates a plain object from a DeleteTableRequest message. Also converts values to other types if specified.
                     * @param message DeleteTableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.DeleteTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTableResponse. */
                interface IDeleteTableResponse {

                    /**
                     * `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     */
                    error?: (com.mapr.data.db.IRpcError|null);
                }

                /** Represents a DeleteTableResponse. */
                class DeleteTableResponse implements IDeleteTableResponse {

                    /**
                     * Constructs a new DeleteTableResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.IDeleteTableResponse);

                    /**
                     * `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     */
                    public error?: (com.mapr.data.db.IRpcError|null);

                    /**
                     * Creates a new DeleteTableResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTableResponse instance
                     */
                    public static create(properties?: com.mapr.data.db.IDeleteTableResponse): com.mapr.data.db.DeleteTableResponse;

                    /**
                     * Encodes the specified DeleteTableResponse message. Does not implicitly {@link com.mapr.data.db.DeleteTableResponse.verify|verify} messages.
                     * @param message DeleteTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IDeleteTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTableResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.DeleteTableResponse.verify|verify} messages.
                     * @param message DeleteTableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IDeleteTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTableResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.DeleteTableResponse;

                    /**
                     * Decodes a DeleteTableResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.DeleteTableResponse;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.DeleteTableResponse;

                    /**
                     * Creates a plain object from a DeleteTableResponse message. Also converts values to other types if specified.
                     * @param message DeleteTableResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.DeleteTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: com.mapr.data.db.ITableExistsRequest);

                    /** TableExistsRequest tablePath. */
                    public tablePath: string;

                    /**
                     * Creates a new TableExistsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableExistsRequest instance
                     */
                    public static create(properties?: com.mapr.data.db.ITableExistsRequest): com.mapr.data.db.TableExistsRequest;

                    /**
                     * Encodes the specified TableExistsRequest message. Does not implicitly {@link com.mapr.data.db.TableExistsRequest.verify|verify} messages.
                     * @param message TableExistsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.ITableExistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableExistsRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.TableExistsRequest.verify|verify} messages.
                     * @param message TableExistsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.ITableExistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableExistsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableExistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.TableExistsRequest;

                    /**
                     * Decodes a TableExistsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableExistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.TableExistsRequest;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.TableExistsRequest;

                    /**
                     * Creates a plain object from a TableExistsRequest message. Also converts values to other types if specified.
                     * @param message TableExistsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.TableExistsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableExistsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TableExistsResponse. */
                interface ITableExistsResponse {

                    /**
                     * `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     */
                    error?: (com.mapr.data.db.IRpcError|null);
                }

                /** Represents a TableExistsResponse. */
                class TableExistsResponse implements ITableExistsResponse {

                    /**
                     * Constructs a new TableExistsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.ITableExistsResponse);

                    /**
                     * `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     */
                    public error?: (com.mapr.data.db.IRpcError|null);

                    /**
                     * Creates a new TableExistsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableExistsResponse instance
                     */
                    public static create(properties?: com.mapr.data.db.ITableExistsResponse): com.mapr.data.db.TableExistsResponse;

                    /**
                     * Encodes the specified TableExistsResponse message. Does not implicitly {@link com.mapr.data.db.TableExistsResponse.verify|verify} messages.
                     * @param message TableExistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.ITableExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableExistsResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.TableExistsResponse.verify|verify} messages.
                     * @param message TableExistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.ITableExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableExistsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.TableExistsResponse;

                    /**
                     * Decodes a TableExistsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.TableExistsResponse;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.TableExistsResponse;

                    /**
                     * Creates a plain object from a TableExistsResponse message. Also converts values to other types if specified.
                     * @param message TableExistsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.TableExistsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableExistsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** InsertMode enum. */
                enum InsertMode {
                    UNKNOWN_MODE = 0,
                    INSERT_OR_REPLACE = 1,
                    INSERT = 2,
                    REPLACE = 3
                }

                /** Properties of an InsertOrReplaceRequest. */
                interface IInsertOrReplaceRequest {

                    /** InsertOrReplaceRequest tablePath */
                    tablePath?: (string|null);

                    /** InsertOrReplaceRequest insertMode */
                    insertMode?: (com.mapr.data.db.InsertMode|null);

                    /** InsertOrReplaceRequest payloadEncoding */
                    payloadEncoding?: (com.mapr.data.db.PayloadEncoding|null);

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    jsonDocument?: (string|null);
                }

                /** Represents an InsertOrReplaceRequest. */
                class InsertOrReplaceRequest implements IInsertOrReplaceRequest {

                    /**
                     * Constructs a new InsertOrReplaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.IInsertOrReplaceRequest);

                    /** InsertOrReplaceRequest tablePath. */
                    public tablePath: string;

                    /** InsertOrReplaceRequest insertMode. */
                    public insertMode: com.mapr.data.db.InsertMode;

                    /** InsertOrReplaceRequest payloadEncoding. */
                    public payloadEncoding: com.mapr.data.db.PayloadEncoding;

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    public jsonDocument: string;

                    /** InsertOrReplaceRequest data. */
                    public data?: "jsonDocument";

                    /**
                     * Creates a new InsertOrReplaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsertOrReplaceRequest instance
                     */
                    public static create(properties?: com.mapr.data.db.IInsertOrReplaceRequest): com.mapr.data.db.InsertOrReplaceRequest;

                    /**
                     * Encodes the specified InsertOrReplaceRequest message. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceRequest.verify|verify} messages.
                     * @param message InsertOrReplaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IInsertOrReplaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsertOrReplaceRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceRequest.verify|verify} messages.
                     * @param message InsertOrReplaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IInsertOrReplaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsertOrReplaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsertOrReplaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.InsertOrReplaceRequest;

                    /**
                     * Decodes an InsertOrReplaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsertOrReplaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.InsertOrReplaceRequest;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.InsertOrReplaceRequest;

                    /**
                     * Creates a plain object from an InsertOrReplaceRequest message. Also converts values to other types if specified.
                     * @param message InsertOrReplaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.InsertOrReplaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsertOrReplaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InsertOrReplaceResponse. */
                interface IInsertOrReplaceResponse {

                    /** InsertOrReplaceResponse error */
                    error?: (com.mapr.data.db.IRpcError|null);
                }

                /** Represents an InsertOrReplaceResponse. */
                class InsertOrReplaceResponse implements IInsertOrReplaceResponse {

                    /**
                     * Constructs a new InsertOrReplaceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.IInsertOrReplaceResponse);

                    /** InsertOrReplaceResponse error. */
                    public error?: (com.mapr.data.db.IRpcError|null);

                    /**
                     * Creates a new InsertOrReplaceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsertOrReplaceResponse instance
                     */
                    public static create(properties?: com.mapr.data.db.IInsertOrReplaceResponse): com.mapr.data.db.InsertOrReplaceResponse;

                    /**
                     * Encodes the specified InsertOrReplaceResponse message. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceResponse.verify|verify} messages.
                     * @param message InsertOrReplaceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IInsertOrReplaceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsertOrReplaceResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceResponse.verify|verify} messages.
                     * @param message InsertOrReplaceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IInsertOrReplaceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsertOrReplaceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsertOrReplaceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.InsertOrReplaceResponse;

                    /**
                     * Decodes an InsertOrReplaceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsertOrReplaceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.InsertOrReplaceResponse;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.InsertOrReplaceResponse;

                    /**
                     * Creates a plain object from an InsertOrReplaceResponse message. Also converts values to other types if specified.
                     * @param message InsertOrReplaceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.InsertOrReplaceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    payloadEncoding?: (com.mapr.data.db.PayloadEncoding|null);

                    /**
                     * Contains JSON encoded OJAI document if the payload_encoding is `JSON_ENCODING`.<p/>
                     * <b>Schema of the OJAI document:</b>
                     * <pre>
                     * {
                     * "_id": &lt;id_value>,
                     * "$condition": { &lt;ojai_condition_in_json_format> },
                     * "$select": [ &lt;list_of_field_paths> ]
                     * }
                     * </pre>
                     * The document MUST contain the "_id" field.<p/>
                     * <b>Examples:</b><p/>
                     * <pre>
                     * {
                     * "_id": "user0001"
                     * }
                     * </pre>
                     * <i>or</i>,
                     * <pre>
                     * {
                     * "_id": { "$binary": "dXNlcjAwMDE="} },
                     * "$condition": { "$eq": {"address.zip": 95111} },
                     * "$select": [ "name", "address.phone" ]
                     * }
                     * </pre>
                     */
                    jsonDocument?: (string|null);
                }

                /** Represents a FindByIdRequest. */
                class FindByIdRequest implements IFindByIdRequest {

                    /**
                     * Constructs a new FindByIdRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.IFindByIdRequest);

                    /** FindByIdRequest tablePath. */
                    public tablePath: string;

                    /** FindByIdRequest payloadEncoding. */
                    public payloadEncoding: com.mapr.data.db.PayloadEncoding;

                    /**
                     * Contains JSON encoded OJAI document if the payload_encoding is `JSON_ENCODING`.<p/>
                     * <b>Schema of the OJAI document:</b>
                     * <pre>
                     * {
                     * "_id": &lt;id_value>,
                     * "$condition": { &lt;ojai_condition_in_json_format> },
                     * "$select": [ &lt;list_of_field_paths> ]
                     * }
                     * </pre>
                     * The document MUST contain the "_id" field.<p/>
                     * <b>Examples:</b><p/>
                     * <pre>
                     * {
                     * "_id": "user0001"
                     * }
                     * </pre>
                     * <i>or</i>,
                     * <pre>
                     * {
                     * "_id": { "$binary": "dXNlcjAwMDE="} },
                     * "$condition": { "$eq": {"address.zip": 95111} },
                     * "$select": [ "name", "address.phone" ]
                     * }
                     * </pre>
                     */
                    public jsonDocument: string;

                    /** FindByIdRequest data. */
                    public data?: "jsonDocument";

                    /**
                     * Creates a new FindByIdRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindByIdRequest instance
                     */
                    public static create(properties?: com.mapr.data.db.IFindByIdRequest): com.mapr.data.db.FindByIdRequest;

                    /**
                     * Encodes the specified FindByIdRequest message. Does not implicitly {@link com.mapr.data.db.FindByIdRequest.verify|verify} messages.
                     * @param message FindByIdRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IFindByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindByIdRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.FindByIdRequest.verify|verify} messages.
                     * @param message FindByIdRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IFindByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindByIdRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.FindByIdRequest;

                    /**
                     * Decodes a FindByIdRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.FindByIdRequest;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.FindByIdRequest;

                    /**
                     * Creates a plain object from a FindByIdRequest message. Also converts values to other types if specified.
                     * @param message FindByIdRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.FindByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindByIdRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindByIdResponse. */
                interface IFindByIdResponse {

                    /**
                     * `NO_ERROR` - if a document with the specified `_id` was found
                     * `DOCUMENT_NOT_FOUND` - if the document with the specified `_id` does not exist
                     */
                    error?: (com.mapr.data.db.IRpcError|null);

                    /** FindByIdResponse payloadEncoding */
                    payloadEncoding?: (com.mapr.data.db.PayloadEncoding|null);

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    jsonDocument?: (string|null);
                }

                /** Represents a FindByIdResponse. */
                class FindByIdResponse implements IFindByIdResponse {

                    /**
                     * Constructs a new FindByIdResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.mapr.data.db.IFindByIdResponse);

                    /**
                     * `NO_ERROR` - if a document with the specified `_id` was found
                     * `DOCUMENT_NOT_FOUND` - if the document with the specified `_id` does not exist
                     */
                    public error?: (com.mapr.data.db.IRpcError|null);

                    /** FindByIdResponse payloadEncoding. */
                    public payloadEncoding: com.mapr.data.db.PayloadEncoding;

                    /** Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING` */
                    public jsonDocument: string;

                    /** FindByIdResponse data. */
                    public data?: "jsonDocument";

                    /**
                     * Creates a new FindByIdResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindByIdResponse instance
                     */
                    public static create(properties?: com.mapr.data.db.IFindByIdResponse): com.mapr.data.db.FindByIdResponse;

                    /**
                     * Encodes the specified FindByIdResponse message. Does not implicitly {@link com.mapr.data.db.FindByIdResponse.verify|verify} messages.
                     * @param message FindByIdResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IFindByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindByIdResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.FindByIdResponse.verify|verify} messages.
                     * @param message FindByIdResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IFindByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindByIdResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindByIdResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.FindByIdResponse;

                    /**
                     * Decodes a FindByIdResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindByIdResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.FindByIdResponse;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.FindByIdResponse;

                    /**
                     * Creates a plain object from a FindByIdResponse message. Also converts values to other types if specified.
                     * @param message FindByIdResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.FindByIdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    payloadEncoding?: (com.mapr.data.db.PayloadEncoding|null);

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
                    constructor(properties?: com.mapr.data.db.IFindRequest);

                    /** FindRequest tablePath. */
                    public tablePath: string;

                    /** FindRequest payloadEncoding. */
                    public payloadEncoding: com.mapr.data.db.PayloadEncoding;

                    /** FindRequest includeQueryPlan. */
                    public includeQueryPlan: boolean;

                    /** Contains JSON encoded OJAI Query if the payload_encoding is `JSON_ENCODING` */
                    public jsonQuery: string;

                    /** FindRequest data. */
                    public data?: "jsonQuery";

                    /**
                     * Creates a new FindRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindRequest instance
                     */
                    public static create(properties?: com.mapr.data.db.IFindRequest): com.mapr.data.db.FindRequest;

                    /**
                     * Encodes the specified FindRequest message. Does not implicitly {@link com.mapr.data.db.FindRequest.verify|verify} messages.
                     * @param message FindRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IFindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.FindRequest.verify|verify} messages.
                     * @param message FindRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IFindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.FindRequest;

                    /**
                     * Decodes a FindRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.FindRequest;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.FindRequest;

                    /**
                     * Creates a plain object from a FindRequest message. Also converts values to other types if specified.
                     * @param message FindRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.FindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** FindResponseType enum. */
                enum FindResponseType {
                    UNKNOWN_TYPE = 0,
                    RESULT_DOCUMENT = 1,
                    QUERY_PLAN = 2
                }

                /** Properties of a FindResponse. */
                interface IFindResponse {

                    /** FindResponse error */
                    error?: (com.mapr.data.db.IRpcError|null);

                    /** FindResponse payloadEncoding */
                    payloadEncoding?: (com.mapr.data.db.PayloadEncoding|null);

                    /** Indicates the type of this response */
                    type?: (com.mapr.data.db.FindResponseType|null);

                    /** Contains JSON encoded response if the payload_encoding is `JSON_ENCODING` */
                    jsonResponse?: (string|null);
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
                    constructor(properties?: com.mapr.data.db.IFindResponse);

                    /** FindResponse error. */
                    public error?: (com.mapr.data.db.IRpcError|null);

                    /** FindResponse payloadEncoding. */
                    public payloadEncoding: com.mapr.data.db.PayloadEncoding;

                    /** Indicates the type of this response */
                    public type: com.mapr.data.db.FindResponseType;

                    /** Contains JSON encoded response if the payload_encoding is `JSON_ENCODING` */
                    public jsonResponse: string;

                    /** FindResponse data. */
                    public data?: "jsonResponse";

                    /**
                     * Creates a new FindResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindResponse instance
                     */
                    public static create(properties?: com.mapr.data.db.IFindResponse): com.mapr.data.db.FindResponse;

                    /**
                     * Encodes the specified FindResponse message. Does not implicitly {@link com.mapr.data.db.FindResponse.verify|verify} messages.
                     * @param message FindResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.mapr.data.db.IFindResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.FindResponse.verify|verify} messages.
                     * @param message FindResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.mapr.data.db.IFindResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.mapr.data.db.FindResponse;

                    /**
                     * Decodes a FindResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.mapr.data.db.FindResponse;

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
                    public static fromObject(object: { [k: string]: any }): com.mapr.data.db.FindResponse;

                    /**
                     * Creates a plain object from a FindResponse message. Also converts values to other types if specified.
                     * @param message FindResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.mapr.data.db.FindResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
