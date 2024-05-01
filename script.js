// 1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i


for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  
  
  // 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
  
  
  let i = 0;
  while (i < 50) {
      console.log(i);
      i +=1;
  }
  
  
  // 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.
  
  
  const names = ["Nana", "Dato", "Giorgi", "Levani", "Nika"];
  console.log(names);
  names.push("Luka");
  console.log(names);
  names.unshift("Irakli");
  console.log(names);
  names.shift();
  console.log(names);
  names.pop();
  console.log(names);
  
  
  // 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია
  
  
  const space = [];
  for (let i = 1; i < 10000; i++) {
    space.push(i * i);
  }
  
  
  // 5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი
  
  
  const numbersContainer = [124, 167, 78, 95, 86];
  let sum = 0;
  for (let i = 0; i < numbersContainer.length; i++) {
    sum += numbersContainer[i];
  }
  
  console.log(sum);
  
  
  // 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.
  
  function evenOdd(num) {
  if (num % 2 === 0) {
    return false;
    } else {
      return true;
    }
  }
  
  console.log(evenOdd(7));
  console.log(evenOdd(8));
  
  // 7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს
  
  
  function upperLower(upper) {
    return upper.toLowerCase();
  }
  
  console.log(upperLower("MY NAME IS JOHN"));
  
  
  // 8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება 
  
  
  function numberFilter(numbers) {
    return numbers.filter(numbers => numbers % 2 === 0);
  }
  
  const numbers = [3, 29, 14, 12, 5, 62, 42];
  console.log(numberFilter(numbers))