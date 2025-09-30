

njnayeem@gmail.com

functional : Vendors filter not working for One plus

Steps to Reproduce:

1. Navigate to https://bugbash.live/
2. From Vendors on Left select the Vendor 'OnePlus'
Expected:
  - Only 'OnePlus' products should get filtered and displayed

Actual:
 - All Product are getting displayed


Severity : 'Medium' 
Priority : 'Medium'
Reason of Severity & Priority:
As the issue is only with 'OnePlus' Vendor and other Vendor filer is working fine.


==================================================================================================

njnayeem@gmail.com

ui/ux : User Logout and Username (Profile) is getting overlapped

Steps to Reproduce:
1. Navigate to https://bugbash.live/
2. Click on Sign In
3. Select Username and Password and Click on LOG IN
4. Verify the Left Top Corner for Username (Profile) and Logout

Issue:
The Username (Profile) and Logout option is got cluttered and overlapping each other

Expected: The Username (Profile) and Logout menu should be aligned with proper padding 


Severity : 'High' 
Priority : 'High'
Reason of Severity & Priority:
As the issue is related to Accessibility, it impact user usability and might get annoyed 
when user tries to view profile, Logout is getting clicked

==================================================================================================

njnayeem@gmail.com

functional : When user hovers On Logout, offers Hyperlink is get displayed

Steps to Reproduce:
1. Navigate to https://bugbash.live/
2. Click on Sign In
3. Select Username and Password and Click on LOG IN
4. On the Left Top Corner of, Hover of Logout

Issue: After Sign in, When user hovers on Logout, 
An hyperlink for 'https://bugbash.live/offers' Offer is get displayed

Expected: As the link is unrelated to Logout, It should not displayed offers hyperlink


Severity : 'Low' 
Priority : 'Medium'
Reason of Severity & Priority:
As this issue misleading user on hovering only and functionality not impacted

==================================================================================================


njnayeem@gmail.com

functional : When user add a favorite marked product to cart, Product is getting removed form 'Favourites'

Steps to Reproduce:
1. Navigate to https://bugbash.live/
2. Click on Sign In
3. Select Username and Password and Click on LOG IN
4. Mark Any product or 'iPhone 12 Mini' as favorite using 'heart' icon 
5. Now navigate to 'Favourites' page
6. Click on Add to cart on favorite marked product
7. Now Navigate to Home Page using Logo
8. Again navigate to 'Favourites' page
9. Observe that the Product is removed form 'Favourites'

Expected:
The product remain marked as favorite even user added to cart

Actual:
The favorite marked products are getting removed once added to cart

Severity : 'Medium' 
Priority : 'Medium'
Reason of Severity & Priority:
As the issue is only after adding to cart, still user is able to mark products as favorite

==================================================================================================

njnayeem@gmail.com

functional: User unable to download the order receipt

Steps to Reproduce:
1. Navigate to https://bugbash.live/
2. Click on Sign In
3. Select Username and Password and Click on LOG IN
4. Click on Add to cart on any product 
5. Click on checkout from the cart side pane
6. Fill the shipping Address and Submit
7. Wait for Order Number and 'Download order receipt' link is displayed
8. Click on 'Download order receipt'

Expected:
User should be able to download the order receipt

Actual:
Even multiple click on link, order receipt is not downloaded

Severity : 'Critical' 
Priority : 'High'
Reason of Severity & Priority:
As this is critical functionality and provides a information to User about the purchase it has severe impacts 
on business continuation

==================================================================================================


njnayeem@gmail.com

functional : When user places and order and logout and login back again, order history is not displayed 

Steps to Reproduce:
1. Navigate to https://bugbash.live/
2. Click on Sign In
3. Select Username and Password and Click on LOG IN
4. Click on Add to cart on any product 
5. Click on checkout from the cart side pane
6. Fill the shipping Address and Submit
7. Wait for Order Number and 'Download order receipt' link is displayed
8. Click on Continue Shopping
9. Click on Orders 
10. Verify the order placed is getting displayed
11. Now Logout and Login again with same user

Expected: The order history should get displayed even after logout

Actual: The order history is not get retained.


Severity : 'High' 
Priority : 'High'
Reason of Severity & Priority:
As this is critical functionality and provides a information to User about the purchase.

(Note: We know this for test product and same user is being used by multiple testers,
so history is retained only for session, but in Live environment it must be reported )

==================================================================================================

njnayeem@gmail.com

cross browser : Inconsistent Menu Alignment with Safari browsers

Steps to Reproduce:
1. Navigate to https://bugbash.live/ on Safari browser with either iOS and Mac devices

Issue:
Observe that the Menu items are not aligned and stacked

This misalignment issue is only with safari browsers On Iphone

Severity : 'Medium' 
Priority : 'Medium'
Reason of Severity & Priority:
This issue is impacting Safari browser users (iOS and Mac devices)


==================================================================================================

njnayeem@gmail.com

cross browser : The installment pricing details are not getting displayed in iOS devices

Steps to Reproduce:
1. Navigate to https://bugbash.live/ on iOS device any browser (chrome, safari)

Issue:
The installment pricing details is not get displayed

Expected:
The installment pricing details should get displayed as similar to Desktop Mac /Windows devices

Severity : 'Medium' 
Priority : 'Medium'
Reason of Severity & Priority:
This issue is impacting iOS device users


==================================================================================================

njnayeem@gmail.com

functional : The Username (Profile) is not loading user profile page even shown as hyperlink


Steps to Reproduce:
1. Navigate to https://bugbash.live/
2. Click on Sign In
3. Select Username and Password and Click on LOG IN
4. Verify the Username (Profile) is highlighted as a link
5. Click on the Username (Profile)

Issue:
Username (Profile) is not loading user profile page

Expected:
Either the hyperlink should get removed and user should land to profile page

Severity : 'Medium' 
Priority : 'Medium'