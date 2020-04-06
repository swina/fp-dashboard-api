// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const password = 'cb366bm@5146646'
var node_ssh = require('node-ssh')
const ssh = new node_ssh()
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    return new Promise((resolve, reject) => {
      ssh.connect({
        host: '178.239.177.98',
        username: 'admin',
        port: 22,
        password,
        tryKeyboard: true,
        onKeyboardInteractive: (name, instructions, instructionsLang, prompts, finish) => {
            if (prompts.length > 0 && prompts[0].prompt.toLowerCase().includes('password')) {
              finish([password])
            }
          }
      }).then(()=>{
        ssh.execCommand("ps -G icecast | grep icecast").then(result=>{
          context.data.pid = parseInt(result.stdout.split('?')[0]);
          resolve(context)
        }).catch(error=>{
          console.log('exec error' , error)
          return error;
        });
      }).catch(error=>{
        console.log ( 'general error'  , error );
        return error;
      });
    })
    return context;
  };
};
