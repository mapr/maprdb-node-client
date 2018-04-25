/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.mapr = (function() {

        /**
         * Namespace mapr.
         * @memberof com
         * @namespace
         */
        var mapr = {};

        mapr.data = (function() {

            /**
             * Namespace data.
             * @memberof com.mapr
             * @namespace
             */
            var data = {};

            data.db = (function() {

                /**
                 * Namespace db.
                 * @memberof com.mapr.data
                 * @namespace
                 */
                var db = {};

                db.MapRDbServer = (function() {

                    /**
                     * Constructs a new MapRDbServer service.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a MapRDbServer
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function MapRDbServer(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (MapRDbServer.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MapRDbServer;

                    /**
                     * Creates new MapRDbServer service using the specified rpc implementation.
                     * @function create
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {MapRDbServer} RPC service. Useful where requests and/or responses are streamed.
                     */
                    MapRDbServer.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#createTable}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef CreateTableCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.CreateTableResponse} [response] CreateTableResponse
                     */

                    /**
                     * Calls CreateTable.
                     * @function createTable
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.ICreateTableRequest} request CreateTableRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.CreateTableCallback} callback Node-style callback called with the error, if any, and CreateTableResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.createTable = function createTable(request, callback) {
                        return this.rpcCall(createTable, $root.com.mapr.data.db.CreateTableRequest, $root.com.mapr.data.db.CreateTableResponse, request, callback);
                    };

                    /**
                     * Calls CreateTable.
                     * @function createTable
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.ICreateTableRequest} request CreateTableRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.CreateTableResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#deleteTable}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef DeleteTableCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.DeleteTableResponse} [response] DeleteTableResponse
                     */

                    /**
                     * Calls DeleteTable.
                     * @function deleteTable
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IDeleteTableRequest} request DeleteTableRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.DeleteTableCallback} callback Node-style callback called with the error, if any, and DeleteTableResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.deleteTable = function deleteTable(request, callback) {
                        return this.rpcCall(deleteTable, $root.com.mapr.data.db.DeleteTableRequest, $root.com.mapr.data.db.DeleteTableResponse, request, callback);
                    };

                    /**
                     * Calls DeleteTable.
                     * @function deleteTable
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IDeleteTableRequest} request DeleteTableRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.DeleteTableResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#tableExists}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef TableExistsCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.TableExistsResponse} [response] TableExistsResponse
                     */

                    /**
                     * Calls TableExists.
                     * @function tableExists
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.ITableExistsRequest} request TableExistsRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.TableExistsCallback} callback Node-style callback called with the error, if any, and TableExistsResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.tableExists = function tableExists(request, callback) {
                        return this.rpcCall(tableExists, $root.com.mapr.data.db.TableExistsRequest, $root.com.mapr.data.db.TableExistsResponse, request, callback);
                    };

                    /**
                     * Calls TableExists.
                     * @function tableExists
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.ITableExistsRequest} request TableExistsRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.TableExistsResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#insertOrReplace}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef InsertOrReplaceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.InsertOrReplaceResponse} [response] InsertOrReplaceResponse
                     */

                    /**
                     * Calls InsertOrReplace.
                     * @function insertOrReplace
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IInsertOrReplaceRequest} request InsertOrReplaceRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.InsertOrReplaceCallback} callback Node-style callback called with the error, if any, and InsertOrReplaceResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.insertOrReplace = function insertOrReplace(request, callback) {
                        return this.rpcCall(insertOrReplace, $root.com.mapr.data.db.InsertOrReplaceRequest, $root.com.mapr.data.db.InsertOrReplaceResponse, request, callback);
                    };

                    /**
                     * Calls InsertOrReplace.
                     * @function insertOrReplace
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IInsertOrReplaceRequest} request InsertOrReplaceRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.InsertOrReplaceResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#findById}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef FindByIdCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.FindByIdResponse} [response] FindByIdResponse
                     */

                    /**
                     * Calls FindById.
                     * @function findById
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IFindByIdRequest} request FindByIdRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.FindByIdCallback} callback Node-style callback called with the error, if any, and FindByIdResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.findById = function findById(request, callback) {
                        return this.rpcCall(findById, $root.com.mapr.data.db.FindByIdRequest, $root.com.mapr.data.db.FindByIdResponse, request, callback);
                    };

                    /**
                     * Calls FindById.
                     * @function findById
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IFindByIdRequest} request FindByIdRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.FindByIdResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#find}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef FindCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.FindResponse} [response] FindResponse
                     */

                    /**
                     * Calls Find.
                     * @function find
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IFindRequest} request FindRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.FindCallback} callback Node-style callback called with the error, if any, and FindResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.find = function find(request, callback) {
                        return this.rpcCall(find, $root.com.mapr.data.db.FindRequest, $root.com.mapr.data.db.FindResponse, request, callback);
                    };

                    /**
                     * Calls Find.
                     * @function find
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IFindRequest} request FindRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.FindResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#update}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef UpdateCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.UpdateResponse} [response] UpdateResponse
                     */

                    /**
                     * Calls Update.
                     * @function update
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IUpdateRequest} request UpdateRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.UpdateCallback} callback Node-style callback called with the error, if any, and UpdateResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype.update = function update(request, callback) {
                        return this.rpcCall(update, $root.com.mapr.data.db.UpdateRequest, $root.com.mapr.data.db.UpdateResponse, request, callback);
                    };

                    /**
                     * Calls Update.
                     * @function update
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IUpdateRequest} request UpdateRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.UpdateResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.mapr.data.db.MapRDbServer#delete_}.
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @typedef DeleteCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.mapr.data.db.DeleteResponse} [response] DeleteResponse
                     */

                    /**
                     * Calls Delete.
                     * @function delete
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IDeleteRequest} request DeleteRequest message or plain object
                     * @param {com.mapr.data.db.MapRDbServer.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    MapRDbServer.prototype["delete"] = function delete_(request, callback) {
                        return this.rpcCall(delete_, $root.com.mapr.data.db.DeleteRequest, $root.com.mapr.data.db.DeleteResponse, request, callback);
                    };

                    /**
                     * Calls Delete.
                     * @function delete
                     * @memberof com.mapr.data.db.MapRDbServer
                     * @instance
                     * @param {com.mapr.data.db.IDeleteRequest} request DeleteRequest message or plain object
                     * @returns {Promise<com.mapr.data.db.DeleteResponse>} Promise
                     * @variation 2
                     */

                    return MapRDbServer;
                })();

                /**
                 * RPC response error codes. POSIX error codes are used where appropriate.
                 * 
                 * Extended error codes, those that can not be mapped to a POSIX error code, begins at 256.
                 * @name com.mapr.data.db.ErrorCode
                 * @enum {string}
                 * @property {number} NO_ERROR=0 No error, operation completed successfully.
                 * @property {number} TABLE_NOT_FOUND=2 Specified table does not exist
                 * @property {number} IO_ERROR=5 An I/O error occurred on the server(s)
                 * @property {number} OUT_OF_MEMORY=12 The operation resulted in server(s) running out of memory
                 * @property {number} ACCESS_DENIED=13 User does not have sufficient permission to execute the operation.
                 * @property {number} TABLE_ALREADY_EXISTS=17 The specified table already exists.
                 * @property {number} INVALID_ARGUMENT=22 One or more request parameter was invalid.
                 * This error code should be used whenever a request parameter was unrecognized or outside a valid domain.
                 * For example, an unrecognized enum value was supplied for InsertMode.
                 * @property {number} UNSUPPORTED_OPERATION=38 Requested operation is not supported by this server.
                 * This error code should be used if a known, valid operation is not supported by the current service.
                 * @property {number} UNKNOWN_ERROR=256 Catch-all for all undefined errors on server.
                 * @property {number} UNKNOWN_PAYLOAD_ENCODING=260 UNKNOWN_PAYLOAD_ENCODING value
                 * @property {number} CLUSTER_NOT_FOUND=270 CLUSTER_NOT_FOUND value
                 * @property {number} PATH_NOT_FOUND=271 PATH_NOT_FOUND value
                 * @property {number} DOCUMENT_ALREADY_EXISTS=280 DOCUMENT_ALREADY_EXISTS value
                 * @property {number} DOCUMENT_NOT_FOUND=281 DOCUMENT_NOT_FOUND value
                 * @property {number} ENCODING_ERROR=290 ENCODING_ERROR value
                 * @property {number} DECODING_ERROR=291 DECODING_ERROR value
                 */
                db.ErrorCode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NO_ERROR"] = 0;
                    values[valuesById[2] = "TABLE_NOT_FOUND"] = 2;
                    values[valuesById[5] = "IO_ERROR"] = 5;
                    values[valuesById[12] = "OUT_OF_MEMORY"] = 12;
                    values[valuesById[13] = "ACCESS_DENIED"] = 13;
                    values[valuesById[17] = "TABLE_ALREADY_EXISTS"] = 17;
                    values[valuesById[22] = "INVALID_ARGUMENT"] = 22;
                    values[valuesById[38] = "UNSUPPORTED_OPERATION"] = 38;
                    values[valuesById[256] = "UNKNOWN_ERROR"] = 256;
                    values[valuesById[260] = "UNKNOWN_PAYLOAD_ENCODING"] = 260;
                    values[valuesById[270] = "CLUSTER_NOT_FOUND"] = 270;
                    values[valuesById[271] = "PATH_NOT_FOUND"] = 271;
                    values[valuesById[280] = "DOCUMENT_ALREADY_EXISTS"] = 280;
                    values[valuesById[281] = "DOCUMENT_NOT_FOUND"] = 281;
                    values[valuesById[290] = "ENCODING_ERROR"] = 290;
                    values[valuesById[291] = "DECODING_ERROR"] = 291;
                    return values;
                })();

                db.RpcError = (function() {

                    /**
                     * Properties of a RpcError.
                     * @memberof com.mapr.data.db
                     * @interface IRpcError
                     * @property {com.mapr.data.db.ErrorCode|null} [errCode] Error code for the RPC. `NO_ERROR` indicates RPC completed successfully
                     * @property {string|null} [errorMessage] NULL if `err` is `NO_ERROR`
                     * @property {string|null} [javaStackTrace] NULL if `err` is `NO_ERROR`
                     */

                    /**
                     * Constructs a new RpcError.
                     * @memberof com.mapr.data.db
                     * @classdesc Protobuf message that encapsulates RPC operation error, if any.
                     * Each RPC response should include RpcError message, with `NO_ERROR` indicating success
                     * @implements IRpcError
                     * @constructor
                     * @param {com.mapr.data.db.IRpcError=} [properties] Properties to set
                     */
                    function RpcError(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Error code for the RPC. `NO_ERROR` indicates RPC completed successfully
                     * @member {com.mapr.data.db.ErrorCode} errCode
                     * @memberof com.mapr.data.db.RpcError
                     * @instance
                     */
                    RpcError.prototype.errCode = 0;

                    /**
                     * NULL if `err` is `NO_ERROR`
                     * @member {string} errorMessage
                     * @memberof com.mapr.data.db.RpcError
                     * @instance
                     */
                    RpcError.prototype.errorMessage = "";

                    /**
                     * NULL if `err` is `NO_ERROR`
                     * @member {string} javaStackTrace
                     * @memberof com.mapr.data.db.RpcError
                     * @instance
                     */
                    RpcError.prototype.javaStackTrace = "";

                    /**
                     * Creates a new RpcError instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {com.mapr.data.db.IRpcError=} [properties] Properties to set
                     * @returns {com.mapr.data.db.RpcError} RpcError instance
                     */
                    RpcError.create = function create(properties) {
                        return new RpcError(properties);
                    };

                    /**
                     * Encodes the specified RpcError message. Does not implicitly {@link com.mapr.data.db.RpcError.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {com.mapr.data.db.IRpcError} message RpcError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RpcError.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
                        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
                        if (message.javaStackTrace != null && message.hasOwnProperty("javaStackTrace"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.javaStackTrace);
                        return writer;
                    };

                    /**
                     * Encodes the specified RpcError message, length delimited. Does not implicitly {@link com.mapr.data.db.RpcError.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {com.mapr.data.db.IRpcError} message RpcError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RpcError.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RpcError message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.RpcError} RpcError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RpcError.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.RpcError();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.errCode = reader.int32();
                                break;
                            case 2:
                                message.errorMessage = reader.string();
                                break;
                            case 3:
                                message.javaStackTrace = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RpcError message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.RpcError} RpcError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RpcError.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RpcError message.
                     * @function verify
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RpcError.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            switch (message.errCode) {
                            default:
                                return "errCode: enum value expected";
                            case 0:
                            case 2:
                            case 5:
                            case 12:
                            case 13:
                            case 17:
                            case 22:
                            case 38:
                            case 256:
                            case 260:
                            case 270:
                            case 271:
                            case 280:
                            case 281:
                            case 290:
                            case 291:
                                break;
                            }
                        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                            if (!$util.isString(message.errorMessage))
                                return "errorMessage: string expected";
                        if (message.javaStackTrace != null && message.hasOwnProperty("javaStackTrace"))
                            if (!$util.isString(message.javaStackTrace))
                                return "javaStackTrace: string expected";
                        return null;
                    };

                    /**
                     * Creates a RpcError message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.RpcError} RpcError
                     */
                    RpcError.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.RpcError)
                            return object;
                        var message = new $root.com.mapr.data.db.RpcError();
                        switch (object.errCode) {
                        case "NO_ERROR":
                        case 0:
                            message.errCode = 0;
                            break;
                        case "TABLE_NOT_FOUND":
                        case 2:
                            message.errCode = 2;
                            break;
                        case "IO_ERROR":
                        case 5:
                            message.errCode = 5;
                            break;
                        case "OUT_OF_MEMORY":
                        case 12:
                            message.errCode = 12;
                            break;
                        case "ACCESS_DENIED":
                        case 13:
                            message.errCode = 13;
                            break;
                        case "TABLE_ALREADY_EXISTS":
                        case 17:
                            message.errCode = 17;
                            break;
                        case "INVALID_ARGUMENT":
                        case 22:
                            message.errCode = 22;
                            break;
                        case "UNSUPPORTED_OPERATION":
                        case 38:
                            message.errCode = 38;
                            break;
                        case "UNKNOWN_ERROR":
                        case 256:
                            message.errCode = 256;
                            break;
                        case "UNKNOWN_PAYLOAD_ENCODING":
                        case 260:
                            message.errCode = 260;
                            break;
                        case "CLUSTER_NOT_FOUND":
                        case 270:
                            message.errCode = 270;
                            break;
                        case "PATH_NOT_FOUND":
                        case 271:
                            message.errCode = 271;
                            break;
                        case "DOCUMENT_ALREADY_EXISTS":
                        case 280:
                            message.errCode = 280;
                            break;
                        case "DOCUMENT_NOT_FOUND":
                        case 281:
                            message.errCode = 281;
                            break;
                        case "ENCODING_ERROR":
                        case 290:
                            message.errCode = 290;
                            break;
                        case "DECODING_ERROR":
                        case 291:
                            message.errCode = 291;
                            break;
                        }
                        if (object.errorMessage != null)
                            message.errorMessage = String(object.errorMessage);
                        if (object.javaStackTrace != null)
                            message.javaStackTrace = String(object.javaStackTrace);
                        return message;
                    };

                    /**
                     * Creates a plain object from a RpcError message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.RpcError
                     * @static
                     * @param {com.mapr.data.db.RpcError} message RpcError
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RpcError.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.errCode = options.enums === String ? "NO_ERROR" : 0;
                            object.errorMessage = "";
                            object.javaStackTrace = "";
                        }
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            object.errCode = options.enums === String ? $root.com.mapr.data.db.ErrorCode[message.errCode] : message.errCode;
                        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                            object.errorMessage = message.errorMessage;
                        if (message.javaStackTrace != null && message.hasOwnProperty("javaStackTrace"))
                            object.javaStackTrace = message.javaStackTrace;
                        return object;
                    };

                    /**
                     * Converts this RpcError to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.RpcError
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RpcError.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RpcError;
                })();

                /**
                 * ENUM indicating the encoding scheme of the OJAI objects in RPC request/response.
                 * Currently only JSON encoding is supported.
                 * @name com.mapr.data.db.PayloadEncoding
                 * @enum {string}
                 * @property {number} UNKNOWN_ENCODING=0 Invalid, unknown encoding
                 * @property {number} JSON_ENCODING=1 Payload is encoded as JSON string
                 */
                db.PayloadEncoding = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_ENCODING"] = 0;
                    values[valuesById[1] = "JSON_ENCODING"] = 1;
                    return values;
                })();

                db.CreateTableRequest = (function() {

                    /**
                     * Properties of a CreateTableRequest.
                     * @memberof com.mapr.data.db
                     * @interface ICreateTableRequest
                     * @property {string|null} [tablePath] CreateTableRequest tablePath
                     */

                    /**
                     * Constructs a new CreateTableRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a CreateTableRequest.
                     * @implements ICreateTableRequest
                     * @constructor
                     * @param {com.mapr.data.db.ICreateTableRequest=} [properties] Properties to set
                     */
                    function CreateTableRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateTableRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @instance
                     */
                    CreateTableRequest.prototype.tablePath = "";

                    /**
                     * Creates a new CreateTableRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {com.mapr.data.db.ICreateTableRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.CreateTableRequest} CreateTableRequest instance
                     */
                    CreateTableRequest.create = function create(properties) {
                        return new CreateTableRequest(properties);
                    };

                    /**
                     * Encodes the specified CreateTableRequest message. Does not implicitly {@link com.mapr.data.db.CreateTableRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {com.mapr.data.db.ICreateTableRequest} message CreateTableRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTableRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.CreateTableRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {com.mapr.data.db.ICreateTableRequest} message CreateTableRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateTableRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.CreateTableRequest} CreateTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTableRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.CreateTableRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.CreateTableRequest} CreateTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTableRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateTableRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateTableRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        return null;
                    };

                    /**
                     * Creates a CreateTableRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.CreateTableRequest} CreateTableRequest
                     */
                    CreateTableRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.CreateTableRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.CreateTableRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @static
                     * @param {com.mapr.data.db.CreateTableRequest} message CreateTableRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateTableRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.tablePath = "";
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        return object;
                    };

                    /**
                     * Converts this CreateTableRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.CreateTableRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateTableRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateTableRequest;
                })();

                db.CreateTableResponse = (function() {

                    /**
                     * Properties of a CreateTableResponse.
                     * @memberof com.mapr.data.db
                     * @interface ICreateTableResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] `NO_ERROR` - if the table was created successfully,
                     * `TABLE_ALREADY_EXISTS` - if a table with the same path already exists
                     */

                    /**
                     * Constructs a new CreateTableResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a CreateTableResponse.
                     * @implements ICreateTableResponse
                     * @constructor
                     * @param {com.mapr.data.db.ICreateTableResponse=} [properties] Properties to set
                     */
                    function CreateTableResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * `NO_ERROR` - if the table was created successfully,
                     * `TABLE_ALREADY_EXISTS` - if a table with the same path already exists
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @instance
                     */
                    CreateTableResponse.prototype.error = null;

                    /**
                     * Creates a new CreateTableResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {com.mapr.data.db.ICreateTableResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.CreateTableResponse} CreateTableResponse instance
                     */
                    CreateTableResponse.create = function create(properties) {
                        return new CreateTableResponse(properties);
                    };

                    /**
                     * Encodes the specified CreateTableResponse message. Does not implicitly {@link com.mapr.data.db.CreateTableResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {com.mapr.data.db.ICreateTableResponse} message CreateTableResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTableResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.CreateTableResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {com.mapr.data.db.ICreateTableResponse} message CreateTableResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateTableResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.CreateTableResponse} CreateTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTableResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.CreateTableResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.CreateTableResponse} CreateTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTableResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateTableResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateTableResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.CreateTableResponse} CreateTableResponse
                     */
                    CreateTableResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.CreateTableResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.CreateTableResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.CreateTableResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @static
                     * @param {com.mapr.data.db.CreateTableResponse} message CreateTableResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateTableResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.error = null;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        return object;
                    };

                    /**
                     * Converts this CreateTableResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.CreateTableResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateTableResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateTableResponse;
                })();

                db.DeleteTableRequest = (function() {

                    /**
                     * Properties of a DeleteTableRequest.
                     * @memberof com.mapr.data.db
                     * @interface IDeleteTableRequest
                     * @property {string|null} [tablePath] DeleteTableRequest tablePath
                     */

                    /**
                     * Constructs a new DeleteTableRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a DeleteTableRequest.
                     * @implements IDeleteTableRequest
                     * @constructor
                     * @param {com.mapr.data.db.IDeleteTableRequest=} [properties] Properties to set
                     */
                    function DeleteTableRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteTableRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @instance
                     */
                    DeleteTableRequest.prototype.tablePath = "";

                    /**
                     * Creates a new DeleteTableRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {com.mapr.data.db.IDeleteTableRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.DeleteTableRequest} DeleteTableRequest instance
                     */
                    DeleteTableRequest.create = function create(properties) {
                        return new DeleteTableRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteTableRequest message. Does not implicitly {@link com.mapr.data.db.DeleteTableRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {com.mapr.data.db.IDeleteTableRequest} message DeleteTableRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteTableRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteTableRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.DeleteTableRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {com.mapr.data.db.IDeleteTableRequest} message DeleteTableRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteTableRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.DeleteTableRequest} DeleteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteTableRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.DeleteTableRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteTableRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.DeleteTableRequest} DeleteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteTableRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteTableRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteTableRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteTableRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.DeleteTableRequest} DeleteTableRequest
                     */
                    DeleteTableRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.DeleteTableRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.DeleteTableRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteTableRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @static
                     * @param {com.mapr.data.db.DeleteTableRequest} message DeleteTableRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteTableRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.tablePath = "";
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        return object;
                    };

                    /**
                     * Converts this DeleteTableRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.DeleteTableRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteTableRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteTableRequest;
                })();

                db.DeleteTableResponse = (function() {

                    /**
                     * Properties of a DeleteTableResponse.
                     * @memberof com.mapr.data.db
                     * @interface IDeleteTableResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     */

                    /**
                     * Constructs a new DeleteTableResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a DeleteTableResponse.
                     * @implements IDeleteTableResponse
                     * @constructor
                     * @param {com.mapr.data.db.IDeleteTableResponse=} [properties] Properties to set
                     */
                    function DeleteTableResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @instance
                     */
                    DeleteTableResponse.prototype.error = null;

                    /**
                     * Creates a new DeleteTableResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {com.mapr.data.db.IDeleteTableResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.DeleteTableResponse} DeleteTableResponse instance
                     */
                    DeleteTableResponse.create = function create(properties) {
                        return new DeleteTableResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteTableResponse message. Does not implicitly {@link com.mapr.data.db.DeleteTableResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {com.mapr.data.db.IDeleteTableResponse} message DeleteTableResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteTableResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteTableResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.DeleteTableResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {com.mapr.data.db.IDeleteTableResponse} message DeleteTableResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteTableResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.DeleteTableResponse} DeleteTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteTableResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.DeleteTableResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteTableResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.DeleteTableResponse} DeleteTableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteTableResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteTableResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteTableResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteTableResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.DeleteTableResponse} DeleteTableResponse
                     */
                    DeleteTableResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.DeleteTableResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.DeleteTableResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.DeleteTableResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteTableResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @static
                     * @param {com.mapr.data.db.DeleteTableResponse} message DeleteTableResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteTableResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.error = null;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        return object;
                    };

                    /**
                     * Converts this DeleteTableResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.DeleteTableResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteTableResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteTableResponse;
                })();

                db.TableExistsRequest = (function() {

                    /**
                     * Properties of a TableExistsRequest.
                     * @memberof com.mapr.data.db
                     * @interface ITableExistsRequest
                     * @property {string|null} [tablePath] TableExistsRequest tablePath
                     */

                    /**
                     * Constructs a new TableExistsRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a TableExistsRequest.
                     * @implements ITableExistsRequest
                     * @constructor
                     * @param {com.mapr.data.db.ITableExistsRequest=} [properties] Properties to set
                     */
                    function TableExistsRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TableExistsRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @instance
                     */
                    TableExistsRequest.prototype.tablePath = "";

                    /**
                     * Creates a new TableExistsRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {com.mapr.data.db.ITableExistsRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.TableExistsRequest} TableExistsRequest instance
                     */
                    TableExistsRequest.create = function create(properties) {
                        return new TableExistsRequest(properties);
                    };

                    /**
                     * Encodes the specified TableExistsRequest message. Does not implicitly {@link com.mapr.data.db.TableExistsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {com.mapr.data.db.ITableExistsRequest} message TableExistsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableExistsRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        return writer;
                    };

                    /**
                     * Encodes the specified TableExistsRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.TableExistsRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {com.mapr.data.db.ITableExistsRequest} message TableExistsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableExistsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableExistsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.TableExistsRequest} TableExistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableExistsRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.TableExistsRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TableExistsRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.TableExistsRequest} TableExistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableExistsRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TableExistsRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TableExistsRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        return null;
                    };

                    /**
                     * Creates a TableExistsRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.TableExistsRequest} TableExistsRequest
                     */
                    TableExistsRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.TableExistsRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.TableExistsRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableExistsRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @static
                     * @param {com.mapr.data.db.TableExistsRequest} message TableExistsRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableExistsRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.tablePath = "";
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        return object;
                    };

                    /**
                     * Converts this TableExistsRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.TableExistsRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableExistsRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableExistsRequest;
                })();

                db.TableExistsResponse = (function() {

                    /**
                     * Properties of a TableExistsResponse.
                     * @memberof com.mapr.data.db
                     * @interface ITableExistsResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     */

                    /**
                     * Constructs a new TableExistsResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a TableExistsResponse.
                     * @implements ITableExistsResponse
                     * @constructor
                     * @param {com.mapr.data.db.ITableExistsResponse=} [properties] Properties to set
                     */
                    function TableExistsResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * `NO_ERROR` - if the table exists
                     * `TABLE_NOT_FOUND` - if the table does not exist
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @instance
                     */
                    TableExistsResponse.prototype.error = null;

                    /**
                     * Creates a new TableExistsResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {com.mapr.data.db.ITableExistsResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.TableExistsResponse} TableExistsResponse instance
                     */
                    TableExistsResponse.create = function create(properties) {
                        return new TableExistsResponse(properties);
                    };

                    /**
                     * Encodes the specified TableExistsResponse message. Does not implicitly {@link com.mapr.data.db.TableExistsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {com.mapr.data.db.ITableExistsResponse} message TableExistsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableExistsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TableExistsResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.TableExistsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {com.mapr.data.db.ITableExistsResponse} message TableExistsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableExistsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableExistsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.TableExistsResponse} TableExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableExistsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.TableExistsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TableExistsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.TableExistsResponse} TableExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableExistsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TableExistsResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TableExistsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a TableExistsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.TableExistsResponse} TableExistsResponse
                     */
                    TableExistsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.TableExistsResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.TableExistsResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.TableExistsResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableExistsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @static
                     * @param {com.mapr.data.db.TableExistsResponse} message TableExistsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableExistsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.error = null;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        return object;
                    };

                    /**
                     * Converts this TableExistsResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.TableExistsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableExistsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableExistsResponse;
                })();

                /**
                 * InsertMode enum.
                 * @name com.mapr.data.db.InsertMode
                 * @enum {string}
                 * @property {number} UNKNOWN_MODE=0 Invalid, unknown mode
                 * @property {number} INSERT_OR_REPLACE=1 Insert this document WHETHER OR NOT a document with the same _id exist in the store
                 * @property {number} INSERT=2 Insert this document ONLY IF another document with the same _id DOES NOT exist in the store
                 * @property {number} REPLACE=3 Insert this document ONLY IF a document with the same _id EXISTS in the store
                 */
                db.InsertMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_MODE"] = 0;
                    values[valuesById[1] = "INSERT_OR_REPLACE"] = 1;
                    values[valuesById[2] = "INSERT"] = 2;
                    values[valuesById[3] = "REPLACE"] = 3;
                    return values;
                })();

                db.InsertOrReplaceRequest = (function() {

                    /**
                     * Properties of an InsertOrReplaceRequest.
                     * @memberof com.mapr.data.db
                     * @interface IInsertOrReplaceRequest
                     * @property {string|null} [tablePath] InsertOrReplaceRequest tablePath
                     * @property {com.mapr.data.db.InsertMode|null} [insertMode] InsertOrReplaceRequest insertMode
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] InsertOrReplaceRequest payloadEncoding
                     * @property {string|null} [jsonCondition] <b>[Optional]</b><p/>
                     * Contains JSON encoded OJAI QueryCondition when payload_encoding is `JSON_ENCODING`.<p/>
                     * This should only be specified if the `insert_mode` == REPLACE
                     * @property {string|null} [jsonDocument] <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING`
                     */

                    /**
                     * Constructs a new InsertOrReplaceRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents an InsertOrReplaceRequest.
                     * @implements IInsertOrReplaceRequest
                     * @constructor
                     * @param {com.mapr.data.db.IInsertOrReplaceRequest=} [properties] Properties to set
                     */
                    function InsertOrReplaceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * InsertOrReplaceRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    InsertOrReplaceRequest.prototype.tablePath = "";

                    /**
                     * InsertOrReplaceRequest insertMode.
                     * @member {com.mapr.data.db.InsertMode} insertMode
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    InsertOrReplaceRequest.prototype.insertMode = 0;

                    /**
                     * InsertOrReplaceRequest payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    InsertOrReplaceRequest.prototype.payloadEncoding = 0;

                    /**
                     * <b>[Optional]</b><p/>
                     * Contains JSON encoded OJAI QueryCondition when payload_encoding is `JSON_ENCODING`.<p/>
                     * This should only be specified if the `insert_mode` == REPLACE
                     * @member {string} jsonCondition
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    InsertOrReplaceRequest.prototype.jsonCondition = "";

                    /**
                     * <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING`
                     * @member {string} jsonDocument
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    InsertOrReplaceRequest.prototype.jsonDocument = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * InsertOrReplaceRequest condition.
                     * @member {"jsonCondition"|undefined} condition
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    Object.defineProperty(InsertOrReplaceRequest.prototype, "condition", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonCondition"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * InsertOrReplaceRequest data.
                     * @member {"jsonDocument"|undefined} data
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     */
                    Object.defineProperty(InsertOrReplaceRequest.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonDocument"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new InsertOrReplaceRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {com.mapr.data.db.IInsertOrReplaceRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.InsertOrReplaceRequest} InsertOrReplaceRequest instance
                     */
                    InsertOrReplaceRequest.create = function create(properties) {
                        return new InsertOrReplaceRequest(properties);
                    };

                    /**
                     * Encodes the specified InsertOrReplaceRequest message. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {com.mapr.data.db.IInsertOrReplaceRequest} message InsertOrReplaceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InsertOrReplaceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        if (message.insertMode != null && message.hasOwnProperty("insertMode"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.insertMode);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.payloadEncoding);
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.jsonCondition);
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument"))
                            writer.uint32(/* id 30, wireType 2 =*/242).string(message.jsonDocument);
                        return writer;
                    };

                    /**
                     * Encodes the specified InsertOrReplaceRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {com.mapr.data.db.IInsertOrReplaceRequest} message InsertOrReplaceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InsertOrReplaceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an InsertOrReplaceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.InsertOrReplaceRequest} InsertOrReplaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InsertOrReplaceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.InsertOrReplaceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            case 2:
                                message.insertMode = reader.int32();
                                break;
                            case 3:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 4:
                                message.jsonCondition = reader.string();
                                break;
                            case 30:
                                message.jsonDocument = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an InsertOrReplaceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.InsertOrReplaceRequest} InsertOrReplaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InsertOrReplaceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an InsertOrReplaceRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InsertOrReplaceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        if (message.insertMode != null && message.hasOwnProperty("insertMode"))
                            switch (message.insertMode) {
                            default:
                                return "insertMode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition")) {
                            properties.condition = 1;
                            if (!$util.isString(message.jsonCondition))
                                return "jsonCondition: string expected";
                        }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            properties.data = 1;
                            if (!$util.isString(message.jsonDocument))
                                return "jsonDocument: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an InsertOrReplaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.InsertOrReplaceRequest} InsertOrReplaceRequest
                     */
                    InsertOrReplaceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.InsertOrReplaceRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.InsertOrReplaceRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        switch (object.insertMode) {
                        case "UNKNOWN_MODE":
                        case 0:
                            message.insertMode = 0;
                            break;
                        case "INSERT_OR_REPLACE":
                        case 1:
                            message.insertMode = 1;
                            break;
                        case "INSERT":
                        case 2:
                            message.insertMode = 2;
                            break;
                        case "REPLACE":
                        case 3:
                            message.insertMode = 3;
                            break;
                        }
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        if (object.jsonCondition != null)
                            message.jsonCondition = String(object.jsonCondition);
                        if (object.jsonDocument != null)
                            message.jsonDocument = String(object.jsonDocument);
                        return message;
                    };

                    /**
                     * Creates a plain object from an InsertOrReplaceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @static
                     * @param {com.mapr.data.db.InsertOrReplaceRequest} message InsertOrReplaceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InsertOrReplaceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.tablePath = "";
                            object.insertMode = options.enums === String ? "UNKNOWN_MODE" : 0;
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                        }
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        if (message.insertMode != null && message.hasOwnProperty("insertMode"))
                            object.insertMode = options.enums === String ? $root.com.mapr.data.db.InsertMode[message.insertMode] : message.insertMode;
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition")) {
                            object.jsonCondition = message.jsonCondition;
                            if (options.oneofs)
                                object.condition = "jsonCondition";
                        }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            object.jsonDocument = message.jsonDocument;
                            if (options.oneofs)
                                object.data = "jsonDocument";
                        }
                        return object;
                    };

                    /**
                     * Converts this InsertOrReplaceRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.InsertOrReplaceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InsertOrReplaceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return InsertOrReplaceRequest;
                })();

                db.InsertOrReplaceResponse = (function() {

                    /**
                     * Properties of an InsertOrReplaceResponse.
                     * @memberof com.mapr.data.db
                     * @interface IInsertOrReplaceResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] InsertOrReplaceResponse error
                     */

                    /**
                     * Constructs a new InsertOrReplaceResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents an InsertOrReplaceResponse.
                     * @implements IInsertOrReplaceResponse
                     * @constructor
                     * @param {com.mapr.data.db.IInsertOrReplaceResponse=} [properties] Properties to set
                     */
                    function InsertOrReplaceResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * InsertOrReplaceResponse error.
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @instance
                     */
                    InsertOrReplaceResponse.prototype.error = null;

                    /**
                     * Creates a new InsertOrReplaceResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {com.mapr.data.db.IInsertOrReplaceResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.InsertOrReplaceResponse} InsertOrReplaceResponse instance
                     */
                    InsertOrReplaceResponse.create = function create(properties) {
                        return new InsertOrReplaceResponse(properties);
                    };

                    /**
                     * Encodes the specified InsertOrReplaceResponse message. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {com.mapr.data.db.IInsertOrReplaceResponse} message InsertOrReplaceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InsertOrReplaceResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified InsertOrReplaceResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.InsertOrReplaceResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {com.mapr.data.db.IInsertOrReplaceResponse} message InsertOrReplaceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InsertOrReplaceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an InsertOrReplaceResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.InsertOrReplaceResponse} InsertOrReplaceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InsertOrReplaceResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.InsertOrReplaceResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an InsertOrReplaceResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.InsertOrReplaceResponse} InsertOrReplaceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InsertOrReplaceResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an InsertOrReplaceResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InsertOrReplaceResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an InsertOrReplaceResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.InsertOrReplaceResponse} InsertOrReplaceResponse
                     */
                    InsertOrReplaceResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.InsertOrReplaceResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.InsertOrReplaceResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.InsertOrReplaceResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an InsertOrReplaceResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @static
                     * @param {com.mapr.data.db.InsertOrReplaceResponse} message InsertOrReplaceResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InsertOrReplaceResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.error = null;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        return object;
                    };

                    /**
                     * Converts this InsertOrReplaceResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.InsertOrReplaceResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InsertOrReplaceResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return InsertOrReplaceResponse;
                })();

                db.FindByIdRequest = (function() {

                    /**
                     * Properties of a FindByIdRequest.
                     * @memberof com.mapr.data.db
                     * @interface IFindByIdRequest
                     * @property {string|null} [tablePath] FindByIdRequest tablePath
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] FindByIdRequest payloadEncoding
                     * @property {string|null} [jsonDocument] Contains JSON encoded OJAI document if the payload_encoding is `JSON_ENCODING`.<p/>
                     * <b>Schema of the OJAI document:</b>
                     * <pre>
                     * {
                     * "_id": &lt;id_value>,
                     * "$where": { &lt;ojai_condition_in_json_format> },
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
                     * "$where": { "$eq": {"address.zip": 95111} },
                     * "$select": [ "name", "address.phone" ]
                     * }
                     * </pre>
                     */

                    /**
                     * Constructs a new FindByIdRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a FindByIdRequest.
                     * @implements IFindByIdRequest
                     * @constructor
                     * @param {com.mapr.data.db.IFindByIdRequest=} [properties] Properties to set
                     */
                    function FindByIdRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FindByIdRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @instance
                     */
                    FindByIdRequest.prototype.tablePath = "";

                    /**
                     * FindByIdRequest payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @instance
                     */
                    FindByIdRequest.prototype.payloadEncoding = 0;

                    /**
                     * Contains JSON encoded OJAI document if the payload_encoding is `JSON_ENCODING`.<p/>
                     * <b>Schema of the OJAI document:</b>
                     * <pre>
                     * {
                     * "_id": &lt;id_value>,
                     * "$where": { &lt;ojai_condition_in_json_format> },
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
                     * "$where": { "$eq": {"address.zip": 95111} },
                     * "$select": [ "name", "address.phone" ]
                     * }
                     * </pre>
                     * @member {string} jsonDocument
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @instance
                     */
                    FindByIdRequest.prototype.jsonDocument = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * FindByIdRequest data.
                     * @member {"jsonDocument"|undefined} data
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @instance
                     */
                    Object.defineProperty(FindByIdRequest.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonDocument"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new FindByIdRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {com.mapr.data.db.IFindByIdRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.FindByIdRequest} FindByIdRequest instance
                     */
                    FindByIdRequest.create = function create(properties) {
                        return new FindByIdRequest(properties);
                    };

                    /**
                     * Encodes the specified FindByIdRequest message. Does not implicitly {@link com.mapr.data.db.FindByIdRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {com.mapr.data.db.IFindByIdRequest} message FindByIdRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindByIdRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payloadEncoding);
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument"))
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonDocument);
                        return writer;
                    };

                    /**
                     * Encodes the specified FindByIdRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.FindByIdRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {com.mapr.data.db.IFindByIdRequest} message FindByIdRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FindByIdRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.FindByIdRequest} FindByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindByIdRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.FindByIdRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            case 2:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 10:
                                message.jsonDocument = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FindByIdRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.FindByIdRequest} FindByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindByIdRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FindByIdRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FindByIdRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            properties.data = 1;
                            if (!$util.isString(message.jsonDocument))
                                return "jsonDocument: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FindByIdRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.FindByIdRequest} FindByIdRequest
                     */
                    FindByIdRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.FindByIdRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.FindByIdRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        if (object.jsonDocument != null)
                            message.jsonDocument = String(object.jsonDocument);
                        return message;
                    };

                    /**
                     * Creates a plain object from a FindByIdRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @static
                     * @param {com.mapr.data.db.FindByIdRequest} message FindByIdRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindByIdRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.tablePath = "";
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                        }
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            object.jsonDocument = message.jsonDocument;
                            if (options.oneofs)
                                object.data = "jsonDocument";
                        }
                        return object;
                    };

                    /**
                     * Converts this FindByIdRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.FindByIdRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FindByIdRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindByIdRequest;
                })();

                db.FindByIdResponse = (function() {

                    /**
                     * Properties of a FindByIdResponse.
                     * @memberof com.mapr.data.db
                     * @interface IFindByIdResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] `NO_ERROR` - if a document with the specified `_id` was found
                     * `DOCUMENT_NOT_FOUND` - if the document with the specified `_id` does not exist
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] FindByIdResponse payloadEncoding
                     * @property {string|null} [jsonDocument] <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING`
                     */

                    /**
                     * Constructs a new FindByIdResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a FindByIdResponse.
                     * @implements IFindByIdResponse
                     * @constructor
                     * @param {com.mapr.data.db.IFindByIdResponse=} [properties] Properties to set
                     */
                    function FindByIdResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * `NO_ERROR` - if a document with the specified `_id` was found
                     * `DOCUMENT_NOT_FOUND` - if the document with the specified `_id` does not exist
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @instance
                     */
                    FindByIdResponse.prototype.error = null;

                    /**
                     * FindByIdResponse payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @instance
                     */
                    FindByIdResponse.prototype.payloadEncoding = 0;

                    /**
                     * <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document if the payload_encoding is `JSON_ENCODING`
                     * @member {string} jsonDocument
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @instance
                     */
                    FindByIdResponse.prototype.jsonDocument = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * FindByIdResponse data.
                     * @member {"jsonDocument"|undefined} data
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @instance
                     */
                    Object.defineProperty(FindByIdResponse.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonDocument"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new FindByIdResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {com.mapr.data.db.IFindByIdResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.FindByIdResponse} FindByIdResponse instance
                     */
                    FindByIdResponse.create = function create(properties) {
                        return new FindByIdResponse(properties);
                    };

                    /**
                     * Encodes the specified FindByIdResponse message. Does not implicitly {@link com.mapr.data.db.FindByIdResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {com.mapr.data.db.IFindByIdResponse} message FindByIdResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindByIdResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payloadEncoding);
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument"))
                            writer.uint32(/* id 30, wireType 2 =*/242).string(message.jsonDocument);
                        return writer;
                    };

                    /**
                     * Encodes the specified FindByIdResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.FindByIdResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {com.mapr.data.db.IFindByIdResponse} message FindByIdResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindByIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FindByIdResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.FindByIdResponse} FindByIdResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindByIdResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.FindByIdResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 30:
                                message.jsonDocument = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FindByIdResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.FindByIdResponse} FindByIdResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindByIdResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FindByIdResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FindByIdResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            properties.data = 1;
                            if (!$util.isString(message.jsonDocument))
                                return "jsonDocument: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FindByIdResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.FindByIdResponse} FindByIdResponse
                     */
                    FindByIdResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.FindByIdResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.FindByIdResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.FindByIdResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        if (object.jsonDocument != null)
                            message.jsonDocument = String(object.jsonDocument);
                        return message;
                    };

                    /**
                     * Creates a plain object from a FindByIdResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @static
                     * @param {com.mapr.data.db.FindByIdResponse} message FindByIdResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindByIdResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.error = null;
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            object.jsonDocument = message.jsonDocument;
                            if (options.oneofs)
                                object.data = "jsonDocument";
                        }
                        return object;
                    };

                    /**
                     * Converts this FindByIdResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.FindByIdResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FindByIdResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindByIdResponse;
                })();

                db.FindRequest = (function() {

                    /**
                     * Properties of a FindRequest.
                     * @memberof com.mapr.data.db
                     * @interface IFindRequest
                     * @property {string|null} [tablePath] FindRequest tablePath
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] FindRequest payloadEncoding
                     * @property {boolean|null} [includeQueryPlan] FindRequest includeQueryPlan
                     * @property {string|null} [jsonQuery] <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Query if the payload_encoding is `JSON_ENCODING`
                     */

                    /**
                     * Constructs a new FindRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a FindRequest.
                     * @implements IFindRequest
                     * @constructor
                     * @param {com.mapr.data.db.IFindRequest=} [properties] Properties to set
                     */
                    function FindRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FindRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.FindRequest
                     * @instance
                     */
                    FindRequest.prototype.tablePath = "";

                    /**
                     * FindRequest payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.FindRequest
                     * @instance
                     */
                    FindRequest.prototype.payloadEncoding = 0;

                    /**
                     * FindRequest includeQueryPlan.
                     * @member {boolean} includeQueryPlan
                     * @memberof com.mapr.data.db.FindRequest
                     * @instance
                     */
                    FindRequest.prototype.includeQueryPlan = false;

                    /**
                     * <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Query if the payload_encoding is `JSON_ENCODING`
                     * @member {string} jsonQuery
                     * @memberof com.mapr.data.db.FindRequest
                     * @instance
                     */
                    FindRequest.prototype.jsonQuery = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * FindRequest data.
                     * @member {"jsonQuery"|undefined} data
                     * @memberof com.mapr.data.db.FindRequest
                     * @instance
                     */
                    Object.defineProperty(FindRequest.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonQuery"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new FindRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {com.mapr.data.db.IFindRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.FindRequest} FindRequest instance
                     */
                    FindRequest.create = function create(properties) {
                        return new FindRequest(properties);
                    };

                    /**
                     * Encodes the specified FindRequest message. Does not implicitly {@link com.mapr.data.db.FindRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {com.mapr.data.db.IFindRequest} message FindRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payloadEncoding);
                        if (message.includeQueryPlan != null && message.hasOwnProperty("includeQueryPlan"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.includeQueryPlan);
                        if (message.jsonQuery != null && message.hasOwnProperty("jsonQuery"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.jsonQuery);
                        return writer;
                    };

                    /**
                     * Encodes the specified FindRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.FindRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {com.mapr.data.db.IFindRequest} message FindRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FindRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.FindRequest} FindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.FindRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            case 2:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 3:
                                message.includeQueryPlan = reader.bool();
                                break;
                            case 4:
                                message.jsonQuery = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FindRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.FindRequest} FindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FindRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FindRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.includeQueryPlan != null && message.hasOwnProperty("includeQueryPlan"))
                            if (typeof message.includeQueryPlan !== "boolean")
                                return "includeQueryPlan: boolean expected";
                        if (message.jsonQuery != null && message.hasOwnProperty("jsonQuery")) {
                            properties.data = 1;
                            if (!$util.isString(message.jsonQuery))
                                return "jsonQuery: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FindRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.FindRequest} FindRequest
                     */
                    FindRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.FindRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.FindRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        if (object.includeQueryPlan != null)
                            message.includeQueryPlan = Boolean(object.includeQueryPlan);
                        if (object.jsonQuery != null)
                            message.jsonQuery = String(object.jsonQuery);
                        return message;
                    };

                    /**
                     * Creates a plain object from a FindRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.FindRequest
                     * @static
                     * @param {com.mapr.data.db.FindRequest} message FindRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.tablePath = "";
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                            object.includeQueryPlan = false;
                        }
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.includeQueryPlan != null && message.hasOwnProperty("includeQueryPlan"))
                            object.includeQueryPlan = message.includeQueryPlan;
                        if (message.jsonQuery != null && message.hasOwnProperty("jsonQuery")) {
                            object.jsonQuery = message.jsonQuery;
                            if (options.oneofs)
                                object.data = "jsonQuery";
                        }
                        return object;
                    };

                    /**
                     * Converts this FindRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.FindRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FindRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindRequest;
                })();

                /**
                 * FindResponseType enum.
                 * @name com.mapr.data.db.FindResponseType
                 * @enum {string}
                 * @property {number} UNKNOWN_TYPE=0 Invalid, unknown type
                 * @property {number} RESULT_DOCUMENT=1 Indicates that the current response contains a QueryResult Document
                 * @property {number} QUERY_PLAN=2 Indicates that the current response contains a Query plan
                 */
                db.FindResponseType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
                    values[valuesById[1] = "RESULT_DOCUMENT"] = 1;
                    values[valuesById[2] = "QUERY_PLAN"] = 2;
                    return values;
                })();

                db.FindResponse = (function() {

                    /**
                     * Properties of a FindResponse.
                     * @memberof com.mapr.data.db
                     * @interface IFindResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] FindResponse error
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] FindResponse payloadEncoding
                     * @property {com.mapr.data.db.FindResponseType|null} [type] Indicates the type of this response
                     * @property {string|null} [jsonResponse] Contains JSON encoded response if the payload_encoding is `JSON_ENCODING`
                     */

                    /**
                     * Constructs a new FindResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Results of Find() RPCs are streamed to the clients, with each FindResponse containing
                     * one OJAI document. If the `include_query_plan` in FindRequest was set to true, the first
                     * FindResponse will contain the query plan instead of OJAI Document
                     * @implements IFindResponse
                     * @constructor
                     * @param {com.mapr.data.db.IFindResponse=} [properties] Properties to set
                     */
                    function FindResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FindResponse error.
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.FindResponse
                     * @instance
                     */
                    FindResponse.prototype.error = null;

                    /**
                     * FindResponse payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.FindResponse
                     * @instance
                     */
                    FindResponse.prototype.payloadEncoding = 0;

                    /**
                     * Indicates the type of this response
                     * @member {com.mapr.data.db.FindResponseType} type
                     * @memberof com.mapr.data.db.FindResponse
                     * @instance
                     */
                    FindResponse.prototype.type = 0;

                    /**
                     * Contains JSON encoded response if the payload_encoding is `JSON_ENCODING`
                     * @member {string} jsonResponse
                     * @memberof com.mapr.data.db.FindResponse
                     * @instance
                     */
                    FindResponse.prototype.jsonResponse = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * FindResponse data.
                     * @member {"jsonResponse"|undefined} data
                     * @memberof com.mapr.data.db.FindResponse
                     * @instance
                     */
                    Object.defineProperty(FindResponse.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonResponse"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new FindResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {com.mapr.data.db.IFindResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.FindResponse} FindResponse instance
                     */
                    FindResponse.create = function create(properties) {
                        return new FindResponse(properties);
                    };

                    /**
                     * Encodes the specified FindResponse message. Does not implicitly {@link com.mapr.data.db.FindResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {com.mapr.data.db.IFindResponse} message FindResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payloadEncoding);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                        if (message.jsonResponse != null && message.hasOwnProperty("jsonResponse"))
                            writer.uint32(/* id 30, wireType 2 =*/242).string(message.jsonResponse);
                        return writer;
                    };

                    /**
                     * Encodes the specified FindResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.FindResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {com.mapr.data.db.IFindResponse} message FindResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FindResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FindResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.FindResponse} FindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.FindResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 3:
                                message.type = reader.int32();
                                break;
                            case 30:
                                message.jsonResponse = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FindResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.FindResponse} FindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FindResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FindResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FindResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.jsonResponse != null && message.hasOwnProperty("jsonResponse")) {
                            properties.data = 1;
                            if (!$util.isString(message.jsonResponse))
                                return "jsonResponse: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FindResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.FindResponse} FindResponse
                     */
                    FindResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.FindResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.FindResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.FindResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        switch (object.type) {
                        case "UNKNOWN_TYPE":
                        case 0:
                            message.type = 0;
                            break;
                        case "RESULT_DOCUMENT":
                        case 1:
                            message.type = 1;
                            break;
                        case "QUERY_PLAN":
                        case 2:
                            message.type = 2;
                            break;
                        }
                        if (object.jsonResponse != null)
                            message.jsonResponse = String(object.jsonResponse);
                        return message;
                    };

                    /**
                     * Creates a plain object from a FindResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.FindResponse
                     * @static
                     * @param {com.mapr.data.db.FindResponse} message FindResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FindResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.error = null;
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                            object.type = options.enums === String ? "UNKNOWN_TYPE" : 0;
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.mapr.data.db.FindResponseType[message.type] : message.type;
                        if (message.jsonResponse != null && message.hasOwnProperty("jsonResponse")) {
                            object.jsonResponse = message.jsonResponse;
                            if (options.oneofs)
                                object.data = "jsonResponse";
                        }
                        return object;
                    };

                    /**
                     * Converts this FindResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.FindResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FindResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindResponse;
                })();

                db.UpdateRequest = (function() {

                    /**
                     * Properties of an UpdateRequest.
                     * @memberof com.mapr.data.db
                     * @interface IUpdateRequest
                     * @property {string|null} [tablePath] UpdateRequest tablePath
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] UpdateRequest payloadEncoding
                     * @property {string|null} [jsonDocument] <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document with `_id` field when payload_encoding is `JSON_ENCODING`.<p/>
                     * @property {string|null} [jsonCondition] <b>[Optional]</b><p/>
                     * Contains JSON encoded OJAI QueryCondition when payload_encoding is `JSON_ENCODING`.<p/>
                     * @property {string|null} [jsonMutation] <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI DocumentMutation when payload_encoding is `JSON_ENCODING`.<p/>
                     */

                    /**
                     * Constructs a new UpdateRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents an UpdateRequest.
                     * @implements IUpdateRequest
                     * @constructor
                     * @param {com.mapr.data.db.IUpdateRequest=} [properties] Properties to set
                     */
                    function UpdateRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    UpdateRequest.prototype.tablePath = "";

                    /**
                     * UpdateRequest payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    UpdateRequest.prototype.payloadEncoding = 0;

                    /**
                     * <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document with `_id` field when payload_encoding is `JSON_ENCODING`.<p/>
                     * @member {string} jsonDocument
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    UpdateRequest.prototype.jsonDocument = "";

                    /**
                     * <b>[Optional]</b><p/>
                     * Contains JSON encoded OJAI QueryCondition when payload_encoding is `JSON_ENCODING`.<p/>
                     * @member {string} jsonCondition
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    UpdateRequest.prototype.jsonCondition = "";

                    /**
                     * <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI DocumentMutation when payload_encoding is `JSON_ENCODING`.<p/>
                     * @member {string} jsonMutation
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    UpdateRequest.prototype.jsonMutation = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * UpdateRequest document.
                     * @member {"jsonDocument"|undefined} document
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    Object.defineProperty(UpdateRequest.prototype, "document", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonDocument"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * UpdateRequest condition.
                     * @member {"jsonCondition"|undefined} condition
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    Object.defineProperty(UpdateRequest.prototype, "condition", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonCondition"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * UpdateRequest mutation.
                     * @member {"jsonMutation"|undefined} mutation
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     */
                    Object.defineProperty(UpdateRequest.prototype, "mutation", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonMutation"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new UpdateRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {com.mapr.data.db.IUpdateRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.UpdateRequest} UpdateRequest instance
                     */
                    UpdateRequest.create = function create(properties) {
                        return new UpdateRequest(properties);
                    };

                    /**
                     * Encodes the specified UpdateRequest message. Does not implicitly {@link com.mapr.data.db.UpdateRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {com.mapr.data.db.IUpdateRequest} message UpdateRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payloadEncoding);
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.jsonDocument);
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.jsonCondition);
                        if (message.jsonMutation != null && message.hasOwnProperty("jsonMutation"))
                            writer.uint32(/* id 30, wireType 2 =*/242).string(message.jsonMutation);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.UpdateRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {com.mapr.data.db.IUpdateRequest} message UpdateRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.UpdateRequest} UpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.UpdateRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            case 2:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 3:
                                message.jsonDocument = reader.string();
                                break;
                            case 4:
                                message.jsonCondition = reader.string();
                                break;
                            case 30:
                                message.jsonMutation = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.UpdateRequest} UpdateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            properties.document = 1;
                            if (!$util.isString(message.jsonDocument))
                                return "jsonDocument: string expected";
                        }
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition")) {
                            properties.condition = 1;
                            if (!$util.isString(message.jsonCondition))
                                return "jsonCondition: string expected";
                        }
                        if (message.jsonMutation != null && message.hasOwnProperty("jsonMutation")) {
                            properties.mutation = 1;
                            if (!$util.isString(message.jsonMutation))
                                return "jsonMutation: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an UpdateRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.UpdateRequest} UpdateRequest
                     */
                    UpdateRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.UpdateRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.UpdateRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        if (object.jsonDocument != null)
                            message.jsonDocument = String(object.jsonDocument);
                        if (object.jsonCondition != null)
                            message.jsonCondition = String(object.jsonCondition);
                        if (object.jsonMutation != null)
                            message.jsonMutation = String(object.jsonMutation);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @static
                     * @param {com.mapr.data.db.UpdateRequest} message UpdateRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.tablePath = "";
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                        }
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            object.jsonDocument = message.jsonDocument;
                            if (options.oneofs)
                                object.document = "jsonDocument";
                        }
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition")) {
                            object.jsonCondition = message.jsonCondition;
                            if (options.oneofs)
                                object.condition = "jsonCondition";
                        }
                        if (message.jsonMutation != null && message.hasOwnProperty("jsonMutation")) {
                            object.jsonMutation = message.jsonMutation;
                            if (options.oneofs)
                                object.mutation = "jsonMutation";
                        }
                        return object;
                    };

                    /**
                     * Converts this UpdateRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.UpdateRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateRequest;
                })();

                db.UpdateResponse = (function() {

                    /**
                     * Properties of an UpdateResponse.
                     * @memberof com.mapr.data.db
                     * @interface IUpdateResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] `NO_ERROR` - if a document was updated successfuly
                     * `DOCUMENT_NOT_FOUND` - if a document with specified `_id` does not exist or the specified condition
                     * evaluated to 'false'.
                     */

                    /**
                     * Constructs a new UpdateResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents an UpdateResponse.
                     * @implements IUpdateResponse
                     * @constructor
                     * @param {com.mapr.data.db.IUpdateResponse=} [properties] Properties to set
                     */
                    function UpdateResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * `NO_ERROR` - if a document was updated successfuly
                     * `DOCUMENT_NOT_FOUND` - if a document with specified `_id` does not exist or the specified condition
                     * evaluated to 'false'.
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @instance
                     */
                    UpdateResponse.prototype.error = null;

                    /**
                     * Creates a new UpdateResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {com.mapr.data.db.IUpdateResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.UpdateResponse} UpdateResponse instance
                     */
                    UpdateResponse.create = function create(properties) {
                        return new UpdateResponse(properties);
                    };

                    /**
                     * Encodes the specified UpdateResponse message. Does not implicitly {@link com.mapr.data.db.UpdateResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {com.mapr.data.db.IUpdateResponse} message UpdateResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.UpdateResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {com.mapr.data.db.IUpdateResponse} message UpdateResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.UpdateResponse} UpdateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.UpdateResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.UpdateResponse} UpdateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an UpdateResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.UpdateResponse} UpdateResponse
                     */
                    UpdateResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.UpdateResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.UpdateResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.UpdateResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @static
                     * @param {com.mapr.data.db.UpdateResponse} message UpdateResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.error = null;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        return object;
                    };

                    /**
                     * Converts this UpdateResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.UpdateResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateResponse;
                })();

                db.DeleteRequest = (function() {

                    /**
                     * Properties of a DeleteRequest.
                     * @memberof com.mapr.data.db
                     * @interface IDeleteRequest
                     * @property {string|null} [tablePath] DeleteRequest tablePath
                     * @property {com.mapr.data.db.PayloadEncoding|null} [payloadEncoding] DeleteRequest payloadEncoding
                     * @property {string|null} [jsonCondition] <b>[Optional]</b><p/>
                     * Contains JSON encoded OJAI QueryCondition when payload_encoding is `JSON_ENCODING`.<p/>
                     * @property {string|null} [jsonDocument] <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document with `_id` field when payload_encoding is `JSON_ENCODING`.<p/>
                     */

                    /**
                     * Constructs a new DeleteRequest.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a DeleteRequest.
                     * @implements IDeleteRequest
                     * @constructor
                     * @param {com.mapr.data.db.IDeleteRequest=} [properties] Properties to set
                     */
                    function DeleteRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteRequest tablePath.
                     * @member {string} tablePath
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     */
                    DeleteRequest.prototype.tablePath = "";

                    /**
                     * DeleteRequest payloadEncoding.
                     * @member {com.mapr.data.db.PayloadEncoding} payloadEncoding
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     */
                    DeleteRequest.prototype.payloadEncoding = 0;

                    /**
                     * <b>[Optional]</b><p/>
                     * Contains JSON encoded OJAI QueryCondition when payload_encoding is `JSON_ENCODING`.<p/>
                     * @member {string} jsonCondition
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     */
                    DeleteRequest.prototype.jsonCondition = "";

                    /**
                     * <b>[Required]</b><p/>
                     * Contains JSON encoded OJAI Document with `_id` field when payload_encoding is `JSON_ENCODING`.<p/>
                     * @member {string} jsonDocument
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     */
                    DeleteRequest.prototype.jsonDocument = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * DeleteRequest condition.
                     * @member {"jsonCondition"|undefined} condition
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     */
                    Object.defineProperty(DeleteRequest.prototype, "condition", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonCondition"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * DeleteRequest document.
                     * @member {"jsonDocument"|undefined} document
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     */
                    Object.defineProperty(DeleteRequest.prototype, "document", {
                        get: $util.oneOfGetter($oneOfFields = ["jsonDocument"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new DeleteRequest instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {com.mapr.data.db.IDeleteRequest=} [properties] Properties to set
                     * @returns {com.mapr.data.db.DeleteRequest} DeleteRequest instance
                     */
                    DeleteRequest.create = function create(properties) {
                        return new DeleteRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteRequest message. Does not implicitly {@link com.mapr.data.db.DeleteRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {com.mapr.data.db.IDeleteRequest} message DeleteRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tablePath);
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payloadEncoding);
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.jsonCondition);
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.jsonDocument);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link com.mapr.data.db.DeleteRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {com.mapr.data.db.IDeleteRequest} message DeleteRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.DeleteRequest} DeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.DeleteRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.tablePath = reader.string();
                                break;
                            case 2:
                                message.payloadEncoding = reader.int32();
                                break;
                            case 3:
                                message.jsonCondition = reader.string();
                                break;
                            case 4:
                                message.jsonDocument = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.DeleteRequest} DeleteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteRequest message.
                     * @function verify
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            if (!$util.isString(message.tablePath))
                                return "tablePath: string expected";
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            switch (message.payloadEncoding) {
                            default:
                                return "payloadEncoding: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition")) {
                            properties.condition = 1;
                            if (!$util.isString(message.jsonCondition))
                                return "jsonCondition: string expected";
                        }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            properties.document = 1;
                            if (!$util.isString(message.jsonDocument))
                                return "jsonDocument: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.DeleteRequest} DeleteRequest
                     */
                    DeleteRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.DeleteRequest)
                            return object;
                        var message = new $root.com.mapr.data.db.DeleteRequest();
                        if (object.tablePath != null)
                            message.tablePath = String(object.tablePath);
                        switch (object.payloadEncoding) {
                        case "UNKNOWN_ENCODING":
                        case 0:
                            message.payloadEncoding = 0;
                            break;
                        case "JSON_ENCODING":
                        case 1:
                            message.payloadEncoding = 1;
                            break;
                        }
                        if (object.jsonCondition != null)
                            message.jsonCondition = String(object.jsonCondition);
                        if (object.jsonDocument != null)
                            message.jsonDocument = String(object.jsonDocument);
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @static
                     * @param {com.mapr.data.db.DeleteRequest} message DeleteRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.tablePath = "";
                            object.payloadEncoding = options.enums === String ? "UNKNOWN_ENCODING" : 0;
                        }
                        if (message.tablePath != null && message.hasOwnProperty("tablePath"))
                            object.tablePath = message.tablePath;
                        if (message.payloadEncoding != null && message.hasOwnProperty("payloadEncoding"))
                            object.payloadEncoding = options.enums === String ? $root.com.mapr.data.db.PayloadEncoding[message.payloadEncoding] : message.payloadEncoding;
                        if (message.jsonCondition != null && message.hasOwnProperty("jsonCondition")) {
                            object.jsonCondition = message.jsonCondition;
                            if (options.oneofs)
                                object.condition = "jsonCondition";
                        }
                        if (message.jsonDocument != null && message.hasOwnProperty("jsonDocument")) {
                            object.jsonDocument = message.jsonDocument;
                            if (options.oneofs)
                                object.document = "jsonDocument";
                        }
                        return object;
                    };

                    /**
                     * Converts this DeleteRequest to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.DeleteRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteRequest;
                })();

                db.DeleteResponse = (function() {

                    /**
                     * Properties of a DeleteResponse.
                     * @memberof com.mapr.data.db
                     * @interface IDeleteResponse
                     * @property {com.mapr.data.db.IRpcError|null} [error] `NO_ERROR` - if a document was deleted successfuly
                     */

                    /**
                     * Constructs a new DeleteResponse.
                     * @memberof com.mapr.data.db
                     * @classdesc Represents a DeleteResponse.
                     * @implements IDeleteResponse
                     * @constructor
                     * @param {com.mapr.data.db.IDeleteResponse=} [properties] Properties to set
                     */
                    function DeleteResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * `NO_ERROR` - if a document was deleted successfuly
                     * @member {com.mapr.data.db.IRpcError|null|undefined} error
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @instance
                     */
                    DeleteResponse.prototype.error = null;

                    /**
                     * Creates a new DeleteResponse instance using the specified properties.
                     * @function create
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {com.mapr.data.db.IDeleteResponse=} [properties] Properties to set
                     * @returns {com.mapr.data.db.DeleteResponse} DeleteResponse instance
                     */
                    DeleteResponse.create = function create(properties) {
                        return new DeleteResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteResponse message. Does not implicitly {@link com.mapr.data.db.DeleteResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {com.mapr.data.db.IDeleteResponse} message DeleteResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && message.hasOwnProperty("error"))
                            $root.com.mapr.data.db.RpcError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link com.mapr.data.db.DeleteResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {com.mapr.data.db.IDeleteResponse} message DeleteResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapr.data.db.DeleteResponse} DeleteResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapr.data.db.DeleteResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.com.mapr.data.db.RpcError.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapr.data.db.DeleteResponse} DeleteResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteResponse message.
                     * @function verify
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.com.mapr.data.db.RpcError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapr.data.db.DeleteResponse} DeleteResponse
                     */
                    DeleteResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapr.data.db.DeleteResponse)
                            return object;
                        var message = new $root.com.mapr.data.db.DeleteResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".com.mapr.data.db.DeleteResponse.error: object expected");
                            message.error = $root.com.mapr.data.db.RpcError.fromObject(object.error);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @static
                     * @param {com.mapr.data.db.DeleteResponse} message DeleteResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.error = null;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.com.mapr.data.db.RpcError.toObject(message.error, options);
                        return object;
                    };

                    /**
                     * Converts this DeleteResponse to JSON.
                     * @function toJSON
                     * @memberof com.mapr.data.db.DeleteResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteResponse;
                })();

                return db;
            })();

            return data;
        })();

        return mapr;
    })();

    return com;
})();

module.exports = $root;
