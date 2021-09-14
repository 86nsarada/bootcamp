const args = process.argv;

const sumofNumebrs = (args)=>{

  let arguments = args.slice(2,args.length);

  let sum = 0;

  arguments.forEach(element => {

    sum = sum + parseInt(element);
  });

  return sum;
};

console.log(sumofNumebrs(args));