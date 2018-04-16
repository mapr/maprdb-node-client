/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export type Callback<T = any, E = Error> = (err: E | null, data?: T | null) => void
