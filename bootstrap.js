const WebFramework = require('@midwayjs/web').Framework;
const RabbitmqFramework = require('@midwayjs/rabbitmq').Framework;

const web = new WebFramework().configure({
  port: 8001,
});

const rabbit = new RabbitmqFramework().configure({
  /*url: {
   protocol: 'amqp',
   hostname: '127.0.0.1',
   port: 5672,
   username: 'camp',
   password: 'camp',
   vhost: '/camp'
  },*/
  url: 'amqp://admin:liuxin888@localhost:5672'
})

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(web).load(rabbit).run();
