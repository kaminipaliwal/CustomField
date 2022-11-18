const customField = require("../packages/addCustomField");

const UsersController = {
 
    async customFieldM(req, res) {
    try {
      let data =  await customField.addCustomField({
          label_name:  req.body.label_name,
          placeholder: req.body.placeholder,
          contactid : req.body.contactid
          });
        console.log("data",data);
          res.status(200).send({
                    message: "Custom field updated to Contact",
                    data:data
                  });
    } catch (err) {
        res.status(422).send(err)
    }
    }
}

module.exports = UsersController;