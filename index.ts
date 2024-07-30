#! /usr/bin/env node
import { number } from "@inquirer/prompts";
console.log("Welcome to number guesing game!");
console.log(
  "In this game the system will generate a number and you have guess it enjoy"
);
async function GuessNum() {
  const sysGenNUm: number = Math.floor(Math.random() * 10);
  console.log(`System generated number = ${sysGenNUm}`);
  const answere = await number({ message: "Enter you guess", required: true });
  console.log(`Your guess = ${answere}`);
  if (sysGenNUm === answere) {
    console.log("nice work");
  } else {
    console.log(`the answere was ${sysGenNUm} its just the starting cheer up `);
  }
}
async function GuessNum1() {
  console.log("Lets Go >>>>");
  const sysGenNUm1: number = Math.floor(Math.random() * 100);
  console.log(`System generated number =${sysGenNUm1}`);
  const answere = await number({
    message: "Enter you second guess",
    required: true,
  });
  console.log(`Your guess = ${answere}`);
  if (sysGenNUm1 === answere) {
    console.log("your the real player");
  } else {
    console.log(`the answere was ${sysGenNUm1} dont worry theres still more`);
  }
}
async function GuessNum2() {
  console.log("once again");
  const sysGenNUm2: number = Math.floor(Math.random() * 1000);
  console.log(`System generated number = ${sysGenNUm2}`);
  const answere = await number({
    message: "Enter you second guess",
    required: true,
  });
  console.log(`Your guess = ${answere}`);
  if (sysGenNUm2 === answere) {
    console.log("excelento");
  } else {
    console.log(`the answere was ${sysGenNUm2} theres a last try`);
  }
}
async function GuessNum3() {
  console.log("Here comes the imposible level");
  const sysGenNUm3: number = Math.floor(
    Math.random() * 10000000000000000000000000000000
  );
  console.log(`System generated number = ${sysGenNUm3}`);
  const answere = await number({
    message: "Enter you second guess",
    required: true,
  });
  console.log(`Your guess = ${answere}`);
  if (sysGenNUm3 === answere) {
    console.log("your really something");
  } else {
    console.log(`the answere was ${sysGenNUm3} better luck next time soldier`);
  }
}
async function rungame() {
  await GuessNum();
  await GuessNum1();
  await GuessNum2();
  await GuessNum3();
  await console.log("You have completed the game Thanks for playing");
}
rungame();