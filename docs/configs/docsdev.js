/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
export default {
    'en-us': {
        sidemenu: [
            {
                title: 'About',
                children: [
                    {
                        title: 'Introduction',
                        link: '/en-us/docs/dev/user_doc/about/introduction.html',
                    },
                    {
                        title: 'Features',
                        link: '/en-us/docs/dev/user_doc/about/features.html',
                    },
                    {
                        title: 'Hardware Environment',
                        link: '/en-us/docs/dev/user_doc/about/hardware.html',
                    },
                    {
                        title: 'Glossary',
                        link: '/en-us/docs/dev/user_doc/about/glossary.html',
                    }
                ],
            },
            {
                title: 'Quick Start',
                children: [
                    {
                        title: 'Quick Start',
                        link: '/en-us/docs/dev/user_doc/guide/start/quick-start.html',
                    },
                    {
                        title: 'Docker Deployment',
                        link: '/en-us/docs/dev/user_doc/guide/start/docker.html',
                    },
                ],
            },
            {
                title: 'Introduction to Functions',
                children: [
                    {
                        title: 'Application Homepage',
                        link: '/en-us/docs/dev/user_doc/guide/homepage.html',
                    },
                    {
                        title: 'Project',
                        children: [
                            {
                                title: 'Project List',
                                link: '/en-us/docs/dev/user_doc/guide/project/project-list.html',
                            },
                            {
                                title: 'Workflow Definition',
                                link: '/en-us/docs/dev/user_doc/guide/project/workflow-definition.html',
                            },
                            {
                                title: 'Workflow Instance',
                                link: '/en-us/docs/dev/user_doc/guide/project/workflow-instance.html',
                            },
                            {
                                title: 'Task Instance',
                                link: '/en-us/docs/dev/user_doc/guide/project/task-instance.html',
                            },
                            {
                                title: 'Task Definition',
                                link: '/zh-cn/docs/dev/user_doc/guide/project/task-definition.html',
                            },
                        ]
                    },
                    {
                        title: 'Task',
                        children: [
                            {
                                title: 'Shell',
                                link: '/en-us/docs/dev/user_doc/guide/task/shell.html',
                            },
                            {
                                title: 'SubProcess',
                                link: '/en-us/docs/dev/user_doc/guide/task/sub-process.html',
                            },
                            {
                                title: 'Dependent',
                                link: '/en-us/docs/dev/user_doc/guide/task/dependent.html',
                            },
                            {
                                title: 'Stored Procedure',
                                link: '/en-us/docs/dev/user_doc/guide/task/stored-procedure.html',
                            },
                            {
                                title: 'SQL',
                                link: '/en-us/docs/dev/user_doc/guide/task/sql.html',
                            },
                            {
                                title: 'Spark',
                                link: '/en-us/docs/dev/user_doc/guide/task/spark.html',
                            },
                            {
                                title: 'MapReduce',
                                link: '/en-us/docs/dev/user_doc/guide/task/map-reduce.html',
                            },
                            {
                                title: 'Python',
                                link: '/en-us/docs/dev/user_doc/guide/task/python.html',
                            },
                            {
                                title: 'Flink',
                                link: '/en-us/docs/dev/user_doc/guide/task/flink.html',
                            },
                            {
                                title: 'HTTP',
                                link: '/en-us/docs/dev/user_doc/guide/task/http.html',
                            },
                            {
                                title: 'DataX',
                                link: '/en-us/docs/dev/user_doc/guide/task/datax.html',
                            },
                            {
                                title: 'Pigeon',
                                link: '/en-us/docs/dev/user_doc/guide/task/pigeon.html',
                            },
                            {
                                title: 'Conditions',
                                link: '/en-us/docs/dev/user_doc/guide/task/conditions.html',
                            },
                            {
                                title: 'Switch',
                                link: '/en-us/docs/dev/user_doc/guide/task/switch.html',
                            },
                            {
                                title: 'SeaTunnel',
                                link: '/en-us/docs/dev/user_doc/guide/task/seatunnel.html',
                            },
                            {
                                title: 'Amazon EMR',
                                link: '/en-us/docs/dev/user_doc/guide/task/emr.html',
                            },
                            {
                                title: 'Apache Zeppelin',
                                link: '/en-us/docs/dev/user_doc/guide/task/zeppelin.html',
                            },
                            {
                                title: 'Jupyter',
                                link: '/en-us/docs/dev/user_doc/guide/task/jupyter.html',
                            },
                            {
                                title: 'Kubernetes',
                                link: '/en-us/docs/dev/user_doc/guide/task/kubernetes.html',
                            },
                            {
                                title: 'MLflow',
                                link: '/en-us/docs/dev/user_doc/guide/task/mlflow.html',
                            },
                            {
                                title: 'Openmldb',
                                link: '/en-us/docs/dev/user_doc/guide/task/openmldb.html',
                            },
                            {
                                title: 'DVC',
                                link: '/en-us/docs/dev/user_doc/guide/task/dvc.html',
                            },
                            {
                                title: 'Dinky',
                                link: '/en-us/docs/dev/user_doc/guide/task/dinky.html',
                            },
                            {
                                title: 'SageMaker',
                                link: '/en-us/docs/dev/user_doc/guide/task/sagemaker.html',
                            },
                        ],
                    },
                    {
                        title: 'Parameter',
                        children: [
                            {
                                title: 'Built-in Parameter',
                                link: '/en-us/docs/dev/user_doc/guide/parameter/built-in.html',
                            },
                            {
                                title: 'Global Parameter',
                                link: '/en-us/docs/dev/user_doc/guide/parameter/global.html',
                            },
                            {
                                title: 'Local Parameter',
                                link: '/en-us/docs/dev/user_doc/guide/parameter/local.html',
                            },
                            {
                                title: 'Parameter Context',
                                link: '/en-us/docs/dev/user_doc/guide/parameter/context.html',
                            },
                            {
                                title: 'Parameter Priority',
                                link: '/en-us/docs/dev/user_doc/guide/parameter/priority.html',
                            },
                        ],
                    },
                    {
                        title: 'Data Source',
                        children: [
                            {
                                title: 'MySQL',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/mysql.html',
                            },
                            {
                                title: 'PostgreSQL',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/postgresql.html',
                            },
                            {
                                title: 'HIVE',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/hive.html',
                            },
                            {
                                title: 'Spark',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/spark.html',
                            },
                            {
                                title: 'Presto',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/presto.html',
                            },
                            {
                                title: 'SQL SERVER',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/sqlserver.html',
                            },
                            {
                                title: 'Amazon Redshift',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/redshift.html',
                            },
                            {
                                title: 'ClickHouse',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/clickhouse.html',
                            },
                            {
                                title: 'IBM DB2',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/db2.html',
                            },
                            {
                                title: 'Oracle',
                                link: '/en-us/docs/dev/user_doc/guide/datasource/oracle.html',
                            },
                        ],
                    },
                    {
                        title: 'Alert',
                        children: [
                            {
                                title: 'Alert Component User Guide ',
                                link: '/en-us/docs/dev/user_doc/guide/alert/alert_plugin_user_guide.html',
                            },
                            {
                                title: 'Telegram',
                                link: '/en-us/docs/dev/user_doc/guide/alert/telegram.html',
                            },
                            {
                                title: 'Ding Talk',
                                link: '/en-us/docs/dev/user_doc/guide/alert/dingtalk.html',
                            },
                            {
                                title: 'Enterprise Wechat',
                                link: '/en-us/docs/dev/user_doc/guide/alert/enterprise-wechat.html',
                            },
                            {
                                title: 'Enterprise Webexteams',
                                link: '/en-us/docs/dev/user_doc/guide/alert/enterprise-webexteams.html',
                            },
                            {
                                title: 'Script',
                                link: '/en-us/docs/dev/user_doc/guide/alert/script.html',
                            },
                            {
                                title: 'Http',
                                link: '/en-us/docs/dev/user_doc/guide/alert/http.html',
                            },
                        ],
                    },
                    {
                        title: 'Resource',
                        children: [
                            {
                                title: 'Introduction',
                                link: '/en-us/docs/dev/user_doc/guide/resource/intro.html'
                            },
                            {
                                title: 'Configuration',
                                link: '/en-us/docs/dev/user_doc/guide/resource/configuration.html'
                            },
                            {
                                title: 'File Manage',
                                link: '/en-us/docs/dev/user_doc/guide/resource/file-manage.html'
                            },
                            {
                                title: 'UDF Manage',
                                link: '/en-us/docs/dev/user_doc/guide/resource/udf-manage.html'
                            },
                            {
                                title: 'Task Group Manage',
                                link: '/en-us/docs/dev/user_doc/guide/resource/task-group.html'
                            },
                        ],
                    },
                    {
                        title: 'Monitor',
                        link: '/en-us/docs/dev/user_doc/guide/monitor.html',
                    },
                    {
                        title: 'Security',
                        link: '/en-us/docs/dev/user_doc/guide/security.html',
                    },
                    {
                        title: 'Metrics',
                        children: [
                            {
                                title: 'Metrics',
                                link: '/en-us/docs/dev/user_doc/guide/metrics/metrics.html',
                            }
                        ],
                    },
                    {
                        title: 'Data Quality',
                        link: '/en-us/docs/dev/user_doc/guide/data-quality.html',
                    },
                    {
                        title: 'Upgrade',
                        link: '/en-us/docs/dev/user_doc/guide/upgrade.html',
                    },
                    {
                        title: 'Expansion and Reduction',
                        link: '/en-us/docs/dev/user_doc/guide/expansion-reduction.html',
                    },
                ],
            },
            {
                title: 'Installation',
                children: [
                    {
                        title: 'Standalone Deployment',
                        link: '/en-us/docs/dev/user_doc/guide/installation/standalone.html',
                    },
                    {
                        title: 'Pseudo Cluster Deployment',
                        link: '/en-us/docs/dev/user_doc/guide/installation/pseudo-cluster.html',
                    },
                    {
                        title: 'Cluster Deployment',
                        link: '/en-us/docs/dev/user_doc/guide/installation/cluster.html',
                    },
                    {
                        title: 'Kubernetes Deployment',
                        link: '/en-us/docs/dev/user_doc/guide/installation/kubernetes.html',
                    },
                ],
            },
            {
                title: 'Architecture Guide',
                children: [
                    {
                        title: 'Architecture Design',
                        link: '/en-us/docs/dev/user_doc/architecture/design.html',
                    },
                    {
                        title: 'Metadata',
                        link: '/en-us/docs/dev/user_doc/architecture/metadata.html',
                    },
                    {
                        title: 'Configuration File',
                        link: '/en-us/docs/dev/user_doc/architecture/configuration.html',
                    },
                    {
                        title: 'Task Structure',
                        link: '/en-us/docs/dev/user_doc/architecture/task-structure.html',
                    },
                    {
                        title: 'Load Balance',
                        link: '/en-us/docs/dev/user_doc/architecture/load-balance.html',
                    },
                    {
                        title: 'Cache',
                        link: '/en-us/docs/dev/user_doc/architecture/cache.html',
                    },
                ],
            },
            {
                title: 'API',
                children: [
                    {
                        title: 'Open API',
                        link: '/en-us/docs/dev/user_doc/guide/open-api.html',
                    },
                    {
                        title: 'PyDolphinScheduler',
                        link: '/python/index.html',
                    },
                    {
                        title: 'Health Check',
                        link: '/en-us/docs/dev/user_doc/guide/healthcheck.html',
                    },
                ],
            },
            {
                title: 'FAQ',
                children: [
                    {
                        title: 'General Setting',
                        link: '/en-us/docs/dev/user_doc/guide/howto/general-setting.html',
                    },
                    {
                        title: 'Datasource Setting',
                        link: '/en-us/docs/dev/user_doc/guide/howto/datasource-setting.html',
                    },
                    {
                        title: 'Others',
                        link: '/en-us/docs/release/faq.html',
                    }
                ],
            },
            {
                title: 'Older Versions',
                children: [
                    {
                        title: 'Older Versions',
                        link: '/en-us/docs/release/history-versions.html',
                    },
                ],
            },
        ],
        barText: 'Documentation',
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '关于Apache DolphinScheduler',
                children: [
                    {
                        title: '简介',
                        link: '/zh-cn/docs/dev/user_doc/about/introduction.html',
                    },
                    {
                        title: '特性',
                        link: '/zh-cn/docs/dev/user_doc/about/features.html',
                    },
                    {
                        title: '建议配置',
                        link: '/zh-cn/docs/dev/user_doc/about/hardware.html',
                    },
                    {
                        title: '名词解释',
                        link: '/zh-cn/docs/dev/user_doc/about/glossary.html',
                    },
                ],
            },
            {
                title: '快速上手',
                children: [
                    {
                        title: '快速上手',
                        link: '/zh-cn/docs/dev/user_doc/guide/start/quick-start.html',
                    },
                    {
                        title: 'Docker部署(Docker)',
                        link: '/zh-cn/docs/dev/user_doc/guide/start/docker.html',
                    },
                ],
            },
            {
                title: '功能介绍',
                children: [
                    {
                        title: '应用首页',
                        link: '/zh-cn/docs/dev/user_doc/guide/homepage.html',
                    },
                    {
                        title: '项目管理',
                        children: [
                            {
                                title: '项目列表',
                                link: '/zh-cn/docs/dev/user_doc/guide/project/project-list.html',
                            },
                            {
                                title: '工作流定义',
                                link: '/zh-cn/docs/dev/user_doc/guide/project/workflow-definition.html',
                            },
                            {
                                title: '工作流实例',
                                link: '/zh-cn/docs/dev/user_doc/guide/project/workflow-instance.html',
                            },
                            {
                                title: '任务实例',
                                link: '/zh-cn/docs/dev/user_doc/guide/project/task-instance.html',
                            },
                            {
                                title: '任务定义',
                                link: '/zh-cn/docs/dev/user_doc/guide/project/task-definition.html',
                            },
                        ]
                    },
                    {
                        title: '任务类型',
                        children: [
                            {
                                title: 'Shell',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/shell.html',
                            },
                            {
                                title: 'SubProcess',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/sub-process.html',
                            },
                            {
                                title: 'Dependent',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/dependent.html',
                            },
                            {
                                title: 'Stored Procedure',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/stored-procedure.html',
                            },
                            {
                                title: 'SQL',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/sql.html',
                            },
                            {
                                title: 'Spark',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/spark.html',
                            },
                            {
                                title: 'MapReduce',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/map-reduce.html',
                            },
                            {
                                title: 'Python',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/python.html',
                            },
                            {
                                title: 'Flink',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/flink.html',
                            },
                            {
                                title: 'HTTP',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/http.html',
                            },
                            {
                                title: 'DataX',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/datax.html',
                            },
                            {
                                title: 'Pigeon',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/pigeon.html',
                            },
                            {
                                title: 'Conditions',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/conditions.html',
                            },
                            {
                                title: 'Switch',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/switch.html',
                            },
                            {
                                title: 'SeaTunnel',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/seatunnel.html',
                            },
                            {
                                title: 'Amazon EMR',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/emr.html',
                            },
                            {
                                title: 'Apache Zeppelin',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/zeppelin.html',
                            },
                            {
                                title: 'Jupyter',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/jupyter.html',
                            },
                            {
                                title: 'Kubernetes',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/kubernetes.html',
                            },
                            {
                                title: 'MLflow',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/mlflow.html',
                            },
                            {
                                title: 'Openmldb',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/openmldb.html',
                            },
                            {
                                title: 'DVC',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/dvc.html',
                            },
                            {
                                title: 'Dinky',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/dinky.html',
                            },
                            {
                                title: 'SageMaker',
                                link: '/zh-cn/docs/dev/user_doc/guide/task/sagemaker.html',
                            },
                        ],
                    },
                    {
                        title: '参数',
                        children: [
                            {
                                title: '内置参数',
                                link: '/zh-cn/docs/dev/user_doc/guide/parameter/built-in.html',
                            },
                            {
                                title: '全局参数',
                                link: '/zh-cn/docs/dev/user_doc/guide/parameter/global.html',
                            },
                            {
                                title: '本地参数',
                                link: '/zh-cn/docs/dev/user_doc/guide/parameter/local.html',
                            },
                            {
                                title: '参数传递',
                                link: '/zh-cn/docs/dev/user_doc/guide/parameter/context.html',
                            },
                            {
                                title: '参数优先级',
                                link: '/zh-cn/docs/dev/user_doc/guide/parameter/priority.html',
                            },
                        ],
                    },
                    {
                        title: '数据源中心',
                        children: [
                            {
                                title: 'MySQL',
                                link: '/zh-cn/docs/dev/user_doc/guide/datasource/mysql.html',
                            },
                            {
                                title: 'PostgreSQL',
                                link: '/zh-cn/docs/dev/user_doc/guide/datasource/postgresql.html',
                            },
                            {
                                title: 'HIVE',
                                link: '/zh-cn/docs/dev/user_doc/guide/datasource/hive.html',
                            },
                            {
                                title: 'Spark',
                                link: '/zh-cn/docs/dev/user_doc/guide/datasource/spark.html',
                            },
                        ],
                    },
                    {
                        title: '告警',
                        children: [
                            {
                                title: '告警组件向导',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/alert_plugin_user_guide.html',
                            },
                            {
                                title: 'Telegram',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/telegram.html',
                            },
                            {
                                title: '钉钉告警',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/dingtalk.html',
                            },
                            {
                                title: '企业微信',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/enterprise-wechat.html',
                            },
                            {
                                title: 'Webexteams',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/enterprise-webexteams.html',
                            },
                            {
                                title: '脚本告警',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/script.html',
                            },
                            {
                                title: 'Http告警',
                                link: '/zh-cn/docs/dev/user_doc/guide/alert/http.html',
                            },
                        ],
                    },
                    {
                        title: '资源中心',
                        children: [
                            {
                                title: '简介',
                                link: '/zh-cn/docs/dev/user_doc/guide/resource/intro.html'
                            },
                            {
                                title: '配置详情',
                                link: '/zh-cn/docs/dev/user_doc/guide/resource/configuration.html'
                            },
                            {
                                title: '文件管理',
                                link: '/zh-cn/docs/dev/user_doc/guide/resource/file-manage.html'
                            },
                            {
                                title: 'UDF 管理',
                                link: '/zh-cn/docs/dev/user_doc/guide/resource/udf-manage.html'
                            },
                            {
                                title: '任务组管理',
                                link: '/zh-cn/docs/dev/user_doc/guide/resource/task-group.html'
                            },
                        ],
                    },
                    {
                        title: '监控中心',
                        link: '/zh-cn/docs/dev/user_doc/guide/monitor.html',
                    },
                    {
                        title: '安全中心',
                        link: '/zh-cn/docs/dev/user_doc/guide/security.html',
                    },
                    {
                        title: '指标相关',
                        children: [
                            {
                                title: '指标',
                                link: '/zh-cn/docs/dev/user_doc/guide/metrics/metrics.html',
                            }
                        ],
                    },
                    {
                        title: '数据质量',
                        link: '/zh-cn/docs/dev/user_doc/guide/data-quality.html',
                    },
                    {
                        title: '升级',
                        link: '/zh-cn/docs/dev/user_doc/guide/upgrade.html',
                    },
                    {
                        title: '扩/缩容',
                        link: '/zh-cn/docs/dev/user_doc/guide/expansion-reduction.html',
                    },
                ],
            },
            {
                title: '部署指南',
                children: [
                    {
                        title: '单机部署(Standalone)',
                        link: '/zh-cn/docs/dev/user_doc/guide/installation/standalone.html',
                    },
                    {
                        title: '伪集群部署(Pseudo-Cluster)',
                        link: '/zh-cn/docs/dev/user_doc/guide/installation/pseudo-cluster.html',
                    },
                    {
                        title: '集群部署(Cluster)',
                        link: '/zh-cn/docs/dev/user_doc/guide/installation/cluster.html',
                    },
                    {
                        title: 'Kubernetes部署(Kubernetes)',
                        link: '/zh-cn/docs/dev/user_doc/guide/installation/kubernetes.html',
                    },
                ],
            },
            {
                title: '架构设计',
                children: [
                    {
                        title: '元数据文档',
                        link: '/zh-cn/docs/dev/user_doc/architecture/metadata.html',
                    },
                    {
                        title: '架构设计',
                        link: '/zh-cn/docs/dev/user_doc/architecture/design.html',
                    },
                    {
                        title: '配置文件',
                        link: '/zh-cn/docs/dev/user_doc/architecture/configuration.html',
                    },
                    {
                        title: '任务结构',
                        link: '/zh-cn/docs/dev/user_doc/architecture/task-structure.html',
                    },
                    {
                        title: '负载均衡',
                        link: '/zh-cn/docs/dev/user_doc/architecture/load-balance.html',
                    },
                    {
                        title: '缓存',
                        link: '/zh-cn/docs/dev/user_doc/architecture/cache.html',
                    },
                ],
            },
            {
                title: 'API',
                children: [
                    {
                        title: 'API调用',
                        link: '/zh-cn/docs/dev/user_doc/guide/open-api.html',
                    },
                    {
                        title: 'PyDolphinScheduler',
                        link: '/python/index.html',
                    },
                    {
                        title: '健康检查',
                        link: '/zh-cn/docs/dev/user_doc/guide/healthcheck.html',
                    },
                ],
            },
            {
                title: 'FAQ',
                children: [
                    {
                        title: '通用设置',
                        link: '/zh-cn/docs/dev/user_doc/guide/howto/general-setting.html',
                    },
                    {
                        title: '数据源设置',
                        link: '/zh-cn/docs/dev/user_doc/guide/howto/datasource-setting.html',
                    },
                    {
                        title: '其他',
                        link: '/zh-cn/docs/release/faq.html',
                    },
                ],
            },
            {
                title: '历史版本',
                children: [
                    {
                        title: '历史版本',
                        link: '/zh-cn/docs/release/history-versions.html',
                    },
                ],
            },
        ],
        barText: '文档',
    },
};
