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
