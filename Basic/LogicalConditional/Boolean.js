
      let currectGuss = false;
      const number = 6;
      const guess = prompt("guss the number between 1 to 10");

      if(+guess===number)
      {
          currectGuss=true;
      }
      if(+currectGuss===true)
      {
          console.log("you gussed the number!");
      }
      else{
          console.log('sorry!  The number was ${number}.');
      }

    