/*
 * Copyright (c) MapR Technologies, Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as winston from 'winston'

const loggerContainer = new winston.Container({})

export const enableLogging = () => {
  Object.keys(loggerContainer.loggers).forEach((moduleName: string) => {
    const logger = loggerContainer.loggers[moduleName]

    logger.add(winston.transports.Console, {
      colorize: true,
      timestamp: true,
      label: moduleName,
      level: 'debug',
    })
  })
}
export const getLogger = (moduleName: string) => {
  const log = loggerContainer.add(moduleName, {})
  // make sure that it will return logger without transports
  // should call enableLogging to enable all created loggers
  log.clear()

  return log
}
