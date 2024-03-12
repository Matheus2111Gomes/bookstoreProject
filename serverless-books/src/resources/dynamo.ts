var dynamoLivros = {
    Type:"AWS::DynamoDB::Table",
    Properties:{    
      AttributeDefinitions:[

      ],
      BillingMode:'PAY_PER_REQUEST',
      KeySchema:{},
     //StreamSpecification
      TableName:'Livros'
    }
  }

export default { dynamoLivros }