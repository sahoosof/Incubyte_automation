import CreateAccountPage from '../pageObjects/createAccount';
describe("testing for account creation ", ()=>{
    const createAccountPage = new CreateAccountPage();
    let userData;
    beforeEach(() => {
        cy.visitUrl();
        cy.fixture('signUpAccount').then((data) => {
            userData = data; 
          });
      });
    it("create account", ()=>{
        const { firstName, lastName, email, password } = userData;
        createAccountPage.navigateToCreateAccount();
        createAccountPage.enterFirstName(firstName);
        createAccountPage.enterLastName(lastName);
        createAccountPage.enterEmail(email);
        createAccountPage.enterPassword(password);
        createAccountPage.confirmPassword(password);
        createAccountPage.createbtn();
    })
})
