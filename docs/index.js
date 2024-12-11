const axios = require('axios');
const process = require('process');
const fs = require('fs');
async function getUploadedImages(token) {
    const url = "https://sm.ms/api/v2/upload_history";
    const headers = { "Authorization": token };
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching uploaded images:', error);
        process.exit(1);
    }
}

// 获取命令行参数中的token
const token = process.argv[2];

// 检查是否提供了token
if (!token) {
    console.error('Please provide a token as a command line argument.');
    process.exit(1);
}

// 调用函数并处理返回的数据
getUploadedImages(token)
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
        if(data.success){
            // 获取数据成功 生成新的json文件
            const newData = {
                "images_list": data.data.map(item => {
                    return {
                        "width": item.width,
                        "height": item.height,
                        "url": item.url
                    };
                })
            };
            // 将新的数据写入文件
            //fs.writeFileSync('images.json', JSON.stringify(newData, null, 2));
           // 将新的数据写入JS文件
           const jsContent = `const imagesData = ${JSON.stringify(newData, null, 2)};`;
           fs.writeFileSync('imagesData.js', jsContent);

        }
        
    })
    .catch(error => {
        console.error('Error:', error);
    });