const axios = require("axios");
exports.addCustomField = async (requestContent = {},res) => {
    let headers = {};
    let labeldata = {};
    headers = {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IkpOVEpTV04ya0tkRVZkMElFbEZhIiwiY29tcGFueV9pZCI6ImJmb1Q3MkNWcm9oMlg4ZWZPUmdRIiwidmVyc2lvbiI6MSwiaWF0IjoxNjYxNDE2NzQzNTcxLCJzdWIiOiJQcVJEWDZqMjdXempXRUNsQm92eCJ9.u6WPtyudfB9R4nLnLbBZ6i9KquDeK6WnIOZxKAeE9Hg",
        Accept: 'application/json',
    };

    labeldata = {
        "name": requestContent['label_name'] ,
        "dataType": "TEXT",
        "placeholder": requestContent['placeholder'],
        "position": 0
    };

    let responseData = await axios
                .post("https://rest.gohighlevel.com/v1/custom-fields/", labeldata, {headers: headers})
                .then(async(response)=> {
                       
                        let customFieldReq = {
                            customField: `{ ${response.data.id} : "Test" }`
                        }
            
                        let data = await axios
                                .put("https://rest.gohighlevel.com/v1/contacts/" + requestContent['contactid'], customFieldReq, {headers: headers})
                                .then((responseFinal)=> { 
                                    let customFieldRes = {
                                            message: "Custom field updated to Contact",
                                            data: responseFinal.data
                                        };
                                    return customFieldRes;
                                })
                                .catch((error) => {
                                   
                                    return res.send(error)
                                });
                         
                    return data;
                })
                .catch((error) => {
                   
                  return  res.send(error)
                });
    return responseData;
}
