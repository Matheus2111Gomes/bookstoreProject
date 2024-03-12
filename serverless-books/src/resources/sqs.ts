

var sqsFanout = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsFanout-${opt:stage}',
    }
  }


export default {
    sqsFanout,
}