1. 修改 Homestead.yaml 中ip为你的自定义ip

		
			ip: "192.168.168.214"


2.  homestead\scripts\Homestead.rb 文件 搜索 Network ，修改代码为 
    注意：private_network 改为 public_network，192.168.10.10修改为你的ip地址，注意不要ip冲突


			if settings['ip'] != 'autonetwork'
				config.vm.network :private_network, ip: settings['ip'] ||= '192.168.188.214'
			else
				config.vm.network :public_network, ip: '0.0.0.0', auto_network: true
			end

3.  vagrant reload --provision 重载后 如果有问题，请halt后重试