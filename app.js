alert('Welcome To MR Resturant')
let userChoise = +prompt(' 1 Biryani \n 2 Pizza \n 3 Burger \n 4 BBQ')

// Biryani

if (userChoise == 1) {
    console.log('You Select The Biryani');
    let biryaniType = +prompt(' Now Select the Biryani \n 1 Hyderabadi Biryani \n 2 Bombay Biryani \n 3 Chicken Biryani \n 4 Chola Biryani')

    if (biryaniType == 1) {
        console.log('You Select Hyderabadi Biryani');
        alert('You Select Hyderabadi Biryani')
        let biryani = +prompt(' 1 Single Plate \n 2 Double Plate')
        if (biryani == 1) {
            console.log('You Select Single Plate');
            alert('Your order is Hyderabadi Biryani, Single Plate.')
            alert('Your Bill is RS = 250')

        } else if (biryani == 2) {
            console.log('You Select Double Plate');
            alert('Your order is Hyderabadi Biryani, Double Plate.')
            alert('Your Bill is RS = 400')
        } else {
            console.log('Plz Select 1 and 2');
            alert('Plz Select 1 and 2')
        }
    } else if (biryaniType == 2) {
        console.log('You Select Bombay Biryani');
        alert('You Select Bombay Biryani')
        let biryani = +prompt(' 1 Single Plate \n 2 Double Plate')
        if (biryani == 1) {
            console.log('You Select Single Plate');
            alert('Your order is Bombay Biryani, Single Plate.')
            alert('Your Bill is RS = 300')
        } else if (biryani == 2) {
            console.log('You Select Double Plate');
            alert('Your order is Bombay Biryani, Double Plate.')
            alert('Your Bill is RS = 500')
        } else {
            console.log('Plz Select 1 and 2');
            alert('Plz Select 1 and 2')
        }
    } else if (biryaniType == 3) {
        console.log('You Select Chicken Biryani');
        alert('You Select Chicken Biryani')
        let biryani = +prompt(' 1 Single Plate \n 2 Double Plate')
        if (biryani == 1) {
            console.log('You Select Single Plate');
            alert('Your order is Chicken Biryani, Single Plate.')
            alert('Your Bill is RS = 150')
        } else if (biryani == 2) {
            console.log('You Select Double Plate');
            alert('Your order is Chicken Biryani, Double Plate.')
            alert('Your Bill is RS = 280')
        } else {
            console.log('Plz Select 1 and 2');
            alert('Plz Select 1 and 2')
        }
    } else if (biryaniType == 4) {
        console.log('You Select Chola Biryani');
        alert('You Select Chola Biryani')
        let biryani = +prompt(' 1 Single Plate \n 2 Double Plate')
        if (biryani == 1) {
            console.log('You Select Single Plate');
            alert('Your order is Chola Biryani, Single Plate.')
            alert('Your Bill is RS = 100')
        } else if (biryani == 2) {
            console.log('You Select Double Plate');
            alert('Your order is Chola Biryani, Double Plate.')
            alert('Your Bill is RS = 200')
        } else {
            console.log('Plz Select 1 and 2');
            alert('Plz Select 1 and 2')
        }
    }
    else {
        console.log('Enter the Number between 1 to 4');
        alert('Enter the Number between 1 to 4')
    }
}


// Pizza

if (userChoise == 2) {
    console.log('You Select The Pizza');
    let pizzaType = +prompt(' Now Select the Pizza Flavour \n 1 Chicken Fajita \n 2 Chicken Tikka \n 3 Chicken Supreme  \n 4 Pepperoni')

    if (pizzaType == 1) {
        console.log('You Select Chicken Fajita Flavor');
        alert('You Select Chicken Fajita Flavor')
        let pizza = +prompt(' 1 Small \n 2 Medium \n 3 Large')
        if (pizza == 1) {
            console.log('You Select Small, Chicken Fajita Pizza');
            alert('Your order is Small, Chicken Fajita Pizza.')
            alert('Your Bill is RS = 200')
        } else if (pizza == 2) {
            console.log('You Select Medium, Chicken Fajita Pizza');
            alert('Your order is Medium, Chicken Fajita Pizza.')
            alert('Your Bill is RS = 400')
        } else if (pizza == 3) {
            console.log('You Select Large, Chicken Fajita Pizza');
            alert('Your order is Large, Chicken Fajita Pizza.')
            alert('Your Bill is RS = 600')
        }
        else {
            console.log('Plz Select 1, 2, 3');
            alert('Plz Select 1, 2, 3')
        }
    } else if (pizzaType == 2) {
        console.log('You Select Chicken TikkaFlavor');
        alert('You Select Chicken Tikka Flavor')
        let pizza = +prompt(' 1 Small \n 2 Medium \n 3 Large')
        if (pizza == 1) {
            console.log('You Select Small, Chicken Tikka Pizza');
            alert('Your order is Small, Chicken Tikka Pizza.')
            alert('Your Bill is RS = 200')
        } else if (pizza == 2) {
            console.log('You Select Medium, Chicken Tikka Pizza');
            alert('Your order is Medium, Chicken Tikka Pizza.')
            alert('Your Bill is RS = 400')
        } else if (pizza == 3) {
            console.log('You Select Large, Chicken Tikka Pizza');
            alert('Your order is Large, Chicken Tikka Pizza.')
            alert('Your Bill is RS = 600')
        }
        else {
            console.log('Plz Select 1, 2, 3');
            alert('Plz Select 1, 2, 3')
        }
    } else if (pizzaType == 3) {
        console.log('You Select Chicken Supreme Flavor');
        alert('You Select Chicken Supreme Flavor')
        let pizza = +prompt(' 1 Small \n 2 Medium \n 3 Large')
        if (pizza == 1) {
            console.log('You Select Small, Chicken Supreme Pizza');
            alert('Your order is Small, Chicken Supreme Pizza.')
            alert('Your Bill is RS = 400')
        } else if (pizza == 2) {
            console.log('You Select Medium, Chicken Supreme Pizza');
            alert('Your order is Medium, Chicken Supreme Pizza.')
            alert('Your Bill is RS = 600')
        } else if (pizza == 3) {
            console.log('You Select Large, Chicken Supreme Pizza');
            alert('Your order is Large, Chicken Supreme Pizza.')
            alert('Your Bill is RS = 1200')
        }
        else {
            console.log('Plz Select 1, 2, 3');
            alert('Plz Select 1, 2, 3')
        }
    } else if (pizzaType == 4) {
        console.log('You Select Pepperoni Flavor');
        alert('You Select Pepperoni Flavor')
        let pizza = +prompt(' 1 Small \n 2 Medium \n 3 Large')
        if (pizza == 1) {
            console.log('You Select Pepperoni Small Pizza');
            alert('Your order is Pepperoni Small Pizza.')
            alert('Your Bill is RS = 450')
        } else if (pizza == 2) {
            console.log('You Select Pepperoni Medium Pizza');
            alert('Your order is Pepperoni Medium Pizza.')
            alert('Your Bill is RS = 900')
        } else if (pizza == 3) {
            console.log('You Select Pepperoni Large Pizza');
            alert('Your order is Pepperoni Large Pizza.')
            alert('Your Bill is RS = 1100')
        }
        else {
            console.log('Plz Select 1, 2, 3');
            alert('Plz Select 1, 2, 3')
        }
    }
    else {
        console.log('Enter the Number between 1 to 4');
        alert('Enter the Number between 1 to 4')
    }
}


// Burger

if (userChoise == 3) {
    console.log('You Select The Burger');
    let burgerType = +prompt(' Now Select the Burger Type \n 1 Zinger Burger \n 2 Beaf Burger \n 3 Double Pati Burger  \n 4 Egg Mayo Buger')

    if (burgerType == 1) {
        console.log('You Select Zinger Burger');
        alert('Your order is Zinger Burger')
        alert('Your Bill is RS = 430')
    } else if (burgerType == 2) {
        console.log('You Select Beaf Burger');
        alert('Your order Beaf Burger')
        alert('Your Bill is RS = 550')
    } else if (burgerType == 3) {
        console.log('You Select Double Pati Burger');
        alert('Your order is Double Pati Burger')
        alert('Your Bill is RS = 1000')
    } else if (burgerType == 4) {
        console.log('You Select Egg Mayo Buger');
        alert('Your order is Egg Mayo Buger')
        alert('Your Bill is RS = 150')
    }
    else {
        console.log('Enter the Number between 1 to 4');
        alert('Enter the Number between 1 to 4')
    }
}


// BBQ

if (userChoise == 4) {
    console.log('You Select The BBQ');
    let bbqType = +prompt(' Now Select the BBQ Type \n 1 Malai Boti \n 2 Beaf Bihari Boti \n 3 Chicken Tikka \n 4 Seekh Kabab')

    if (bbqType == 1) {
        console.log('You Select Malai Boti');
        alert('Your order is Malai Boti')
        alert('Your Bill is RS = 1100')
    } else if (bbqType == 2) {
        console.log('You Select Beaf Bihari Boti');
        alert('Your order is Beaf Bihari Boti')
        alert('Your Bill is RS = 1100')
    } else if (bbqType == 3) {
        console.log('You Select Chicken Tikka');
        alert('Your order is Chicken Tikka')
        alert('Your Bill is RS = 1100')
    } else if (bbqType == 4) {
        console.log('You Select Seekh Kabab');
        alert('Your order is Seekh Kabab')
        alert('Your Bill is RS = 1100')
    }
    else {
        console.log('Enter the Number between 1 to 4');
        alert('Enter the Number between 1 to 4')
    }
}
