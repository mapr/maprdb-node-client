/*
 * Copyright (c) 2018 MapR, Inc.
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

export const config = {
  HOST: 'node1.cluster.com',
  PORT: '5678',
  AUTH: 'basic',
  USER: 'mapr',
  PASS: 'mapr',
  SSL: 'true',
  SSL_CA: '/opt/mapr/conf/ssl_truststore.pem',
  SSL_TARGET_NAME_OVERRIDE: 'node1.cluster.com',
}
