const { By } = require('selenium-webdriver')


const addMovie = async (driver) => {

    const movie = 'Captain America'
    // find input, write text
    await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys(`${movie}`)
    // find add button and click
    await driver.findElement(By.xpath('//button[text()="Add"]')).click()
    // check to see if movie was added to list 
    const displayed = await driver.findElement(By.xpath(`//span[text()='${movie}']`)).getText()
    // if displayed delete item that is added
    if(displayed) {
        await driver.findElement(By.xpath("//button[text()='x']")).click()
        // check to see if item was deleted 
        // var itemRemoved = await driver.findElement(By.css(`aside`)).getText() || false
    }

    // expect(itemRemoved).toBeFalsey()
}

module.exports = {
    addMovie
}