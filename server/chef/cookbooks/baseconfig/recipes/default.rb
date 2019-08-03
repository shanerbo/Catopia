# Make sure the Apt package lists are up to date, so we're downloading versions that exist.
cookbook_file "apt-sources.list" do
  path "/etc/apt/sources.list"
end
execute 'apt_update' do
  command 'apt-get update'
end

# Base configuration recipe in Chef.
package "wget"
package "ntp"
package "nodejs"
package "npm"
package "nginx"
package "postgresql"


cookbook_file "ntp.conf" do
  path "/etc/ntp.conf"
end
execute 'ntp_restart' do
  command 'service ntp restart'
end

execute 'npm_install' do
  cwd '/home/vagrant/project'
  command 'npm install'
  command 'sudo npm install -g sequelize-cli'
end

cookbook_file "pg_hba.conf" do
  path "/etc/postgresql/10/main/pg_hba.conf"
end

execute 'postgresql_create' do
  command 'echo "CREATE USER ottoh with PASSWORD \'7453\'; CREATE DATABASE cat; GRANT ALL PRIVILEGES ON DATABASE cat TO ottoh;" | sudo -u postgres psql'
  ignore_failure true
end

execute "db_migrate" do 
  command 'cd /home/vagrant/project && sequelize db:migrate'
  command 'cd /home/vagrant/project && sequelize db:seed:all'
end

execute 'npm_start' do
  cwd '/home/vagrant/project'
  command 'node server.js &'
end

cookbook_file "nginx-default" do
  path "/etc/nginx/sites-available/default"
end


execute 'nginx_restart' do
  command 'service nginx restart'
end
