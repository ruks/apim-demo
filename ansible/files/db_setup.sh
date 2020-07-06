
apimHome=$2
host=$3
#./db_setup.sh mysql /Users/rukshan/wso2/apim/3.1.0/wso2am-3.1.0 db1.apim.com


echo "host $3"
if [ "$1" = "mysql" ]; then
echo "Using mysql"		
mysql -uamuser -pPass@123 -h$3<<EOF
	drop database if exists amdb;
	create database amdb;
	use amdb;
	source $apimHome/dbscripts/apimgt/mysql.sql;

	drop database if exists sharedDB;
	create database sharedDB;
	use sharedDB;
	source $apimHome/dbscripts/mysql.sql;

    drop database if exists ei_sharedDB;
	create database ei_sharedDB;
	use ei_sharedDB;
	source $apimHome/dbscripts/mysql.sql;

	drop database if exists APIM_ANALYTICS_DB;
	create database APIM_ANALYTICS_DB;

	drop database if exists WSO2_CLUSTER_DB;
	create database WSO2_CLUSTER_DB;

	drop database if exists PERSISTENCE_DB;
	create database PERSISTENCE_DB;

	SET GLOBAL max_connections = 500;
EOF
elif [ "$1" = "mssql" ]; then		
	echo "Using mssql"
mssql-cli -S localhost -U root -P pass -d default <<EOF
drop database amdb;
drop login amdb;

drop database shareddb;
drop login shareddb;

drop database analyticsdb;
drop login analyticsdb;

create database amdb;
use amdb;
create login amdb with password = 'amdb';
create user amdb for login amdb;
grant create table,alter,control,select,insert to amdb;

create database shareddb;
use shareddb;
create login shareddb with password = 'shareddb';
create user shareddb for login shareddb;
grant create table,alter,control,select,insert to shareddb;

create database analyticsdb;
use analyticsdb;
create login analyticsdb with password = 'analyticsdb';
create user analyticsdb for login analyticsdb;
grant create table,alter,control,select,insert to analyticsdb;
EOF
#with default_schema=db_owner
mssql-cli -S localhost -U amdb -P amdb -d amdb -i /Users/rukshan/wso2/apim/301/active-active/target/wso2am-3.1.0-SNAPSHOT/dbscripts/apimgt/mssql.sql;
mssql-cli -S localhost -U shareddb -P shareddb -d shareddb -i /Users/rukshan/wso2/apim/301/active-active/target/wso2am-3.1.0-SNAPSHOT/dbscripts/mssql.sql;

elif [ "$1" = "oracle" ]; then		
	echo "Using oracle"
sqlplus system/*****@localhost <<EOF
DROP USER amdb CASCADE;
create user amdb identified by amdb;
grant connect, resource to amdb;
grant create session, grant any privilege to amdb;
grant all privileges to amdb;
grant exp_full_database to amdb;
grant imp_full_database to amdb;

connect amdb/amdb@localhost
@/Users/rukshan/wso2/apim/301/active-active/target/wso2am-3.1.0-SNAPSHOT/dbscripts/apimgt/oracle.sql;

DROP USER sharedDb CASCADE;
create user sharedDb identified by sharedDb;
grant connect, resource to sharedDb;
grant create session, grant any privilege to sharedDb;
grant all privileges to sharedDb;
grant exp_full_database to sharedDb;
grant imp_full_database to sharedDb;

connect sharedDb/sharedDb@localhost
@/Users/rukshan/wso2/apim/301/active-active/target/wso2am-3.1.0-SNAPSHOT/dbscripts/oracle.sql;

DROP USER analyticsDb CASCADE;
create user analyticsDb identified by analyticsDb;
grant connect, resource to analyticsDb;
grant create session, grant any privilege to analyticsDb;
grant all privileges to analyticsDb;
grant exp_full_database to analyticsDb;
grant imp_full_database to analyticsDb;

EOF
elif [ "$1" = "h2" ]; then		
	echo "Using h2"
elif [ "$1" = "postgres" ]; then	
	echo "Using postgres"
#https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3	
psql <<EOF
drop database amdb;
drop database shareddb;
drop database analyticsdb;

drop user amdb;
drop user shareddb;
drop user analyticsdb;

create database amdb;
create database shareddb;
create database analyticsdb;

create user amdb with password 'amdb';
\connect amdb
\i /Users/rukshan/wso2/apim/301/active-active/target/wso2am-3.1.0-SNAPSHOT/dbscripts/apimgt/postgresql.sql
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to amdb;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to amdb;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public to amdb;
grant all privileges on database amdb to amdb;

create user shareddb with password 'shareddb';
\connect shareddb
\i /Users/rukshan/wso2/apim/301/active-active/target/wso2am-3.1.0-SNAPSHOT/dbscripts/postgresql.sql
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to shareddb;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to shareddb;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public to shareddb;
grant all privileges on database shareddb to shareddb;

create user analyticsdb with password 'analyticsdb';
grant all privileges on database analyticsdb to analyticsdb;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to analyticsdb;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to analyticsdb;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public to analyticsdb;

EOF
fi	
