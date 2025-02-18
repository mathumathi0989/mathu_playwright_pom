import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login.js';
import  {HomePage}  from '../pages/home.js';
import { ProductDetailPage } from '../pages/productDetail.js';
import {checkoutPage} from '../pages/checkout.js';

test.only('productCheckoutTest', async ({ page }) => {
  const Login = new LoginPage(page)
  const Home = new HomePage(page)
  const productDetail = new ProductDetailPage(page)
  const checkout = new checkoutPage(page)

  await Login.gotoLoginPage()
  await Login.login('testmathu@gmail.com','testmathu')
  await expect(page.locator('#content')).toContainText('My Account');
  await Home.getProduct()
  await productDetail.getProductDetails();
  await checkout.getCheckoutDetails();
  page.close();
  
});