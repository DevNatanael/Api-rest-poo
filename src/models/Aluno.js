import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type:Sequelize.STRING,
          defaultValue:'',
          validate:{
            len:{
              args:[3,255],
              msg:'O nome precisa ter entre 3 e 255 caracteres'
            }
          }
        },
        sobrenome: {
          type:Sequelize.STRING,
          defaultValue:'',
          validate:{
            len:{
              args:[3,255],
              msg:'O sobrenome precisa ter entre 3 e 255 caracteres'
            }
          }
        },
        email: {
          type:Sequelize.STRING,
          defaultValue:'',
          validate:{
            isEmail:{
              msg:'Email inválido'
            }
          }
        },
        idade: {
          type:Sequelize.INTEGER,
          defaultValue:'',
          validate:{
            isInt:{
              msg:'Idade precisa ser um numero inteiro'
            }
          }
        },
        peso: {
          type:Sequelize.FLOAT,
          defaultValue:'',
          validate:{
            isFloat:{
              msg:'Peso precisa ser um numero inteiro ou flutuante'
            }
          }
        },
        altura:{
          type:Sequelize.FLOAT,
          defaultValue:'',
          validate:{
            isFloat:{
              msg:'Altura precisa ser um numero inteiro ou flutuante'
            }
          }
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
