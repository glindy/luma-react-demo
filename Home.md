
# L777 - Personalize with Single Page Apps

## Table of Contents

* [Lab Overview](#lab-overview)
* [Lesson 1 - Adobe Target and Single Page Applications](#lesson-1-adobe-target-and-single-page-applications)
* [Lesson 2 – A/B activity with Target Views in the VEC](#lesson-2-ab-activity-with-target-views-in-the-vec)
* [Lesson 3 - at.js 2.2 getOffer and applyOffer](#lesson-3-atjs-22-getoffer-and-applyoffer)
* [Lesson 4 - Bonus: Introduction to Adobe Target v2 extension in Launch, by Adobe](#lesson-4-bonus-introduction-to-adobe-target-v2-extension-in-launch-by-adobe)
* [Additional Resources](#additional-resources)



## Lab Overview

The web is moving at a breakneck pace, and technologies are changing constantly and rapidly. Adobe's implementation library, AT.JS, natively supports single-page applications (SPAs) and the modern web. Use this simple, one line of code and one-time developer setup to enable your marketers to test and personalize your SPAs with the Visual Experience Composer.

### Key Takeaways

* Get the basics of SPA design and how it impacts authoring in the Adobe Target Visual Experience Composer.
* Deploy Adobe Target on an SPA web page using the new at.js 2.2 library file.
* Pick up troubleshooting and debugging tips and tricks to make you an Adobe Target super pro.

### Prerequisites

* Brackets (http://brackets.io)
* Adobe Target Chrome Helper (https://chrome.google.com/webstore/detail/adobe-target-vec-helper/ggjpideecfnbipkacplkhhaflkdjagak?hl=en)
* User login to Adobe Experience Cloud with access to Adobe Target
* Basic knowledge of Javascript and code implementation
* Familiarity with Adobe Target user interface, concepts, and terms

> <font size = 2>NOTE: The exercises in this lab will involve a very basic Target implementation, and your organization’s deployment will likely be more customized. This lab is intended to introduce you to the architecture, concepts, and functions of at.js 2.x.</font>

# Lesson 1 - Adobe Target and Single Page Applications

## Objective

1. Understand the difference between the traditional multi-page application and single-page application
2. Understand how at.js 2.x works with single-page applications
3. Understand the new concept of Adobe Target Views

## Lesson Context

**What are multi-page applications, and how does Adobe Target work with them?**

Multi-page applications (MPAs) are traditional web applications that need to make server requests to render the entire page in the browser via a full page reload every time it needs to display data or new content as a result of user actions. Even though most of the page is consistent and only parts of the page are to be updated, an MPA must reload the entire page.

![Traditional page lifecycle](2020-02-27-15-21-21.png)

Adobe Target’s at.js 1.x libraries worked well with MPAs, since every user interaction resulted in a full page reload. At.js 1.x would be included at the head of the HTML page and this allowed it to retrieve offers via a Target backend server call.

![Auto-created Global Mbox](2020-02-27-15-22-00.png)

**What are single-page applications, and how does Adobe Target work with them?**

Single-page applications (SPAs) are web applications that load a single HTML page and dynamically rewrite the current page depending on user interactions. Example SPAs include Facebook, Netflix, Twitter, Gmail, and Pinterest. In a SPA, after the initial page load, the server doesn't send HTML; rather, as the user interacts with the application, server requests are made to retrieve the data and markup for only the relevant and applicable content without ever needing a full-page refresh.

![SPA lifecycle](2020-02-27-15-24-30.png)

At.js 2.x is designed specifically with SPAs in mind and operates differently than previous library versions in order to support how content is retrieved and displayed to users browsing SPAs. This includes the new 2.x library, a new function to support authoring and applying experiences, and two new functions to replace legacy mbox functions. We will review these concepts briefly here and in-depth in upcoming lessons later in this lab.

At.js 2.x introduces a new concept of “Views,” which is important for both authoring activities in the Visual Experience Composer (VEC), as well as delivering the right experiences on-site.

**What are “Views” in Adobe Target?**

Views are logical arrangements of visual elements that together make up a SPA “page” experience in the browser. A SPA can, therefore, be considered as transitioning through views, instead of page URLs, based on user interactions. A View can typically represent a whole page, containers, or groups of individual elements that are part of the overall experience within the browser viewport.

This concept of Views, specifically the `triggerView()` function in at.js 2.x, is what enables marketers to launch personalization and optimization activities on SPAs using the VEC. Once you identify what Views you’ll want to target with activities, you’ll set names for each View, and those Views are then triggered by some user interaction in the app. Once triggered, the VEC can detect the View name and any modifications you make to an activity experience are applied to a View name. The `triggerView()`  function signals both the **event** and also **location**, and retrieves the content actions applied to the View from the cache.  

> <font size = 2>NOTE: For example, you may start with configuring Target Views based on each View or partial HTML file for your site. Your View name might be the hash for each “page” location URL, and your trigger might be called when the hash changes. You’ll see this in action when we get to Exercise 1.2.</font>

As described above, since Target cannot rely on page-by-page loads to load the Target scripts in SPAs, at.js 2.x prefetches the experiences applied to Views to which a visitor is matched, and caches those experiences upon initial app load in the user’s browser.

![at.js page load request](2020-02-27-15-35-22.png)

As a visitor interacts with your app and a View is triggered, the activity experience is retrieved from the cache, applied to the View by name, and a notification is sent to Target.

![at.js triggerView](2020-02-27-15-36-09.png)

Now that you understand the difference between MPAs and SPAs, how Target’s at.js 2.x library works, and the purpose and function of Views in Target, let’s move on to implementation.

### Exercise 1.1

Build sample React app and log in to Adobe Target.

1. NodeJS and the React demo app assets for this lab have already been installed on your machine for you in local directory **[folder name]**.  
2. Launch Terminal and navigate to source code directory:

> `cd react-demo-master`

3. Run this command to build the project:  

> `npm run build`

4. This will run build in `watch` mode, where the webpack will listen to any changes to your project and build automatically. **DO NOT CLOSE THIS TERMINAL.**

5. Launch new Command prompt and navigate to the same path. Execute to run the project:

>`npm run start`

   This will run the web server on port 3000. **DO NOT CLOSE THIS TERMINAL.**

7. In a new browser tab, open [http://localhost:3000/#/](http://localhost:3000/#/). Keep this tab open for the duration of this lab.

### Exercise 1.2

Implement at.js 2.2 and `triggerView()`.  

1. Log into the Adobe Experience Cloud and launch Adobe Target by clicking on the Target icon; click the Adobe Target card to access the user interface.  
2. Click the *Setup* link in the top horizontal navigation menu.  
3. Click on the *Implementation* tab on the left navigation.

4. Note the options to download at.js 1.8 or at.js 2.2. Click *Download* to download the at.js 2.2 library file.

5. Save at.js to /public folder of the `react-demo-master` code files.  
6. Open the `public/index.html` file in Brackets. Edit the file to include at.js just before the closing `</head>` tag.

         <head>
         ...
         <script src="at.js"></script>
         </head>

7. The second implementation step is to add Target Views to the app’s route change listeners. To start, open the `src/index.js` file, where the app routes are configured. To call the Target `triggerView` function, copy and paste the following code snippet below the last import statement, before the `router`, and save your changes.

         function targetView() {
         var viewName = window.location.hash;

         // Sanitize viewName to remove any trailing symbols derived from URL
         if (viewName.startsWith('#')) {
            viewName = viewName.substr(1);
         }
         if (viewName.startsWith('/')) {
            viewName = viewName.substr(1);
         }

         viewName = viewName || 'home'; // view name cannot be empty

         // Validate if the Target Libraries are available on your website
         if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target. triggerView === 'function') {
            adobe.target.triggerView(viewName);
         }
         console.log ('AT: View triggered on hash change: ' + viewName);
         }

         const history = syncHistoryWithStore(createBrowserHistory(), store);
         history.listen(targetView);

8. Navigate back to the tab with your locally-hosted website. Right click in the browser and select Inspect. You will see the inspector panel open on the right side of your browser window. Click on the Console tab and look for the printed message to confirm that your code has been deployed successfully.

![View triggered on hash change](2020-02-27-16-03-00.png)

   You have now implemented at.js 2.2 with `triggerView()`.

# Lesson 2 – A/B activity with Target Views in the VEC

## Objective

1. Create an A/B activity in the VEC.
2. Apply View and Page Load modifications to a test experience.
3. QA and debug the at.js calls.

## Lesson Context

The `triggerView` request—and concepts of Views and View names—allow marketers to now author activities within the VEC, where users can leverage the WYSIWYG editor to modify experiences on single page applications, and without the need to access to developer resources. This next exercise will show you what this looks like in the VEC; in exercise 2.2, we will examine the Target delivery flow.

### Exercise 2.1

Create an A/B activity with View and Page Load modifications.

1. Open Adobe Target and go to the Activities link in the top navigation menu.
2.	Click *+ Create Activity* and select A/B Test from the drop-down.
3.	A modal will pop up to start your activity creation workflow. Leave the default selections for channel (web), Experience Composer (Visual), and Workspace (default) as is.
4. In that same modal, enter Activity URL as: `http://localhost:3000/user=id#/` where you will replace `<id>` with your unique user ID. Click *Next*.
5. Your activity URL should load in the Experience editor. (If the page does not load, go to Chrome settings, allow insecure content/unsafe scripts, and reload the page to proceed.) In the left-hand corner of the top navigation, where you’ll see “Untitled Activity,” click on the name element OR hover your cursor over the title and click on the *rename* link that appears. In the blank freeform field, name your activity using the following name and format: `L777 Product Grid and Navbar Test - User <id>`. Replace `<id>` with your unique user ID. Your unique user ID can be found on your class computer screen.

6. Because this is an A/B test, by default two experiences are created for you: Experience A and Experience B. Notice that you are editing Experience B, as indicated in the left Experiences panel, and that you are currently in the Experiences pane of the 3-step guided workflow (see the three steps illustrated in the center top navigation). Observe that the “Current View” is `HOME` in Modifications panel on the right. We will be making two types of modifications to the test experience in this activity.

**Perform a customization action on HOME View:**


7. Add a background image to the homepage Latest Products grid using background-image `<style>` attributes inline in the HTML targeting, the columns is-multiline selector. To locate the selector, you can navigate to the `.heading` container using the DOM path at the bottom of the page. Click on the `#div` in the DOM path and you’ll see the corresponding container highlight in the VEC editor. Once you’ve located the selector, click *Edit > Text/HTML* in the options menu. ![VEC container edit](2020-02-27-16-22-22.png)
   - When the editor modal opens, you will see the rendered HTML in the editor by default; click the HTML button in the upper left-hand corner to switch to the code. Locate the `column is-multiline` element and append the following style attribute before the closing `</div>` tag:

         style="background-image: url(https://teehuggers.com/summit-2020-lab/imgs/summit-ex1-4-background-solid-red.jpg);"

   Your updated code should look something like this; line breaks and comments added for readability. When finished, click *Save*. ![edit text/html](2020-02-27-16-27-41.png)  
   - You should see this HTML edit applied to your `HOME` View in the Modifications panel. If you do not see the Modifications panel, click on the gear icon to expand the panel. Hover over the Action in the Modifications panel and you will see icons for viewing info on the action and to what element the modification will be applied. ![Action applied to Home View](2020-02-27-16-29-18.png)

**Perform a customization action on the header:**

8. Change the background colors of the Cart and Like nav buttons. First, click the Cart button link and then select *Edit > Background Color*. Choose any desired color on the color picker gradient and save your selection. Repeat this step to change the background of the Like button.
9. As described in the previous customization action, if you’re having trouble locating the CSS selector for the Cart and Nav menu buttons, you can also navigate to the `.button.menu` elements using the DOM path at the bottom of the page. Click on the element in the DOM path and you’ll see the corresponding selector highlight in the VEC editor.  ![DOM path](2020-02-27-16-39-40.png)
10. You should see this background color edits applied to your `HOME` View in the Modifications panel. However, since headers and footers are likely static template files (and generally should not change from View to View), you would use the option to “Move to `PAGE LOAD EVENT`.” This means that the modifications will be applied on page load rather than View change. To move a modification to Page Load, hover over the Cart change action and locate the third icon with up/down arrows. ![Move to Page Load](2020-02-27-16-42-01.png)
11. Click the icon, which will open a confirmation modal, and click the checkmark to save. Observe that the Action will now show as applied to a `PAGE LOAD EVENT`. Repeat this step for the Like change action and move to `PAGE LOAD EVENT`. Observe how your actions are now grouped in the Modifications panel. Click *Next.*
12. On the Targeting pane of the 3-step guided workflow, leave the Audience and Traffic Allocation defaults as they are and click *Next*.

> * <font size = 2>You will notice three options for Traffic Allocation on the Targeting screen for this A/B test. The first two, Manual, Auto-Allocate, are included in all Adobe Target Standard licenses. The third option, Auto-Target, is available only with an Adobe Target Premium license.  
> * You will notice that the Auto-Target radio button is grayed out on your screen. While we will not be diving into these capabilities in this lab, it is important to note that Auto-Target CANNOT be selected for A/B tests with any modifications that are applied to Views. Auto-Target can, however, be selected if the modifications in your experiences are applied ONLY to PAGE LOAD EVENTS.</font>

13. The final step in the activity workflow is to configure your test goals and customize your reporting settings:
      - For this exercise, leave the Activity Settings defaults as they are.
      - Under Reporting Settings, leave the Reporting Source as Adobe Target (default).
      - Under Goal Metric, you’ll see a blue section for Primary Goal. Select Conversion from the Select Success Metric dropdown.
      - This will expand a second field for specifying the Action that will indicate that your goal has been reached. Select Viewed an mbox in the Action dropdown.
      - This will expand a third dropdown for specifying which mbox viewed will indicate that your goal has been reached. Select the “any mbox” option in the dropdown.
14. Save and close your activity. You have now created an A/B test on your single page application.


### Exercise 2.2
QA your A/B Test activity.

1. Now, let’s move on to QA and debug the A/B Test activity you just built. In this exercise, we will be looking to not only validate the end user experience on the page, but also examine how Target is interacting with the single page app to deliver your activity’s test experience.
2. After you saved and closed your activity in the previous exercise, you should have landed on the Overview tab of your activity. (If you navigated away from this page, return to the Activities dashboard by clicking Activities link in the top menu, and click on your newly-created activity to land back on the Overview tab.)
3. Under Activity Location, click on the blue Activity QA link.
4. The Activity QA modal will open and you will see QA URLs for each experience. For the activity you just created in Exercise 1.4, Experience A is the default experience (no modifications), and Experience B is where you edited the image src of one the slider slides on the Home View, and changed the Cart and Like navigation background colors in the header on `PAGE LOAD EVENT`. Copy the QA URL for Experience B and paste it into a new browser tab.
5. First, confirm that the Latest Products background image modification applied to the `HOME` View has been displayed. Next, confirm that the Cart and Like button color modifications were rendered on page load.
6. Open the Inspector panel. Click on the Network tab and type “delivery” into the filter field to view the Adobe Target network calls. Click on the very first call in the grid to open the request details.
7. You will notice that this is a very different format than in past version. Observe that there is a new URL parameter for your Target client code. Most importantly, notice that there is a new execute object whose value is `pageLoad`. This is your initial server call on app load.
      - You will also notice that the request URL format has changed from `https://<your-client-code>.tt.omtrdc.net` to `https://mboxedge<##>.tt.omtrdc.net`
      - Instead, you will see the Target client as a query string parameter.
![Network call](2020-02-27-17-03-54.png)
8. If you expand the `execute` field, you’ll notice that it’s currently an empty object. However, in a production scenario, you might see other data that may be passed to the Target servers in the request. For example, these might include page or profile parameters in a production environment. We’ll discuss page and profile parameters in more depth in later exercises.
9. Next, let’s examine the prefetch field near the bottom of the request body. This where the we are prefetching the View—and experiences applied to that View—for the A/B activity that you created through the VEC.
10. Let’s look at the response from Target:
![Target response](2020-02-27-17-04-57.png)
   Observe that in the `prefetch` object, Target is now returning the name of the View where you’re A/B experiences are applied. Expand the `prefetch` object to see the response details. 
11. In `views > index 0`, note the `ViewName`, which was defined in the `src/index.js` file we reviewed in Exercise 1.2. Also note the options > content parameters and expand content. Here you’ll see the Latest Products background image modification you made in your activity’s Experience B that is applied to this View.
      - Note: the prefetched content are cached and rendered to the user when applicable. Target pulls the content from the cache when a user matches the audience for a given activity experience.
      - The cache can also be updated as a user’s profile changes to ensure that the right experience is delivered when the user matches a new audience. We will take a deeper look at these functions later in this lab.
13. Next, observe that in the `execute > pageLoad > options` parameter, Target is returning the modification actions you configured and moved to `PAGE LOAD EVENT`: the background color changes you made to the Cart and Like menu buttons. ![Execute pageLoad](2020-02-27-17-10-05.png)
14. Recall when you opened the Network call log there were two Target calls using the Delivery API. We just looked at the first one, which executed on the initial page load of the app. Now let’s look at the second call in the log. Notice that this request:
      - does not have the `execute > pageLoad` field
      - includes a new `notifications` array

      This is not a page load call requesting a response from the Target servers. Rather, this notification is being sent by default to Target indicating that activity impressions were incremented, content was displayed, selectors were clicked, etc.


15. You are now ready to go live with your A/B activity. Go back to the tab where you have the Adobe Target interface open to the A/B activity’s Overview tab. Click the dropdown with the default set to Inactive and click on the Activate option.


# Lesson 3 - at.js 2.2 getOffer and applyOffer

## Objective

1. Use `adobe.target.getOffer` to pass in product product category parameter.
2. Build custom audience using category affinity profile attribute.
3. Create Experience Targeting (XT) activity to personalize homepage based on visitor's favorite category.

## Lesson Context
Before we begin, let’s introduce what you will be doing in this next exercise. If you have experience with versions 1.7 or earlier of at.js, you may be familiar with the mboxCreate function. This function executes a request to Target and applies the matched offer to the closest `#DIV` based on the mboxDefault class name.

This function is deprecated in at.js 2.x and replaced by the `getOffer()` function in order to fire a request to get a Target offer. This is used with the `applyOffer()` function—the response handler—to apply the matched offer to the `VIEW` and `PAGE LOAD EVENT` to which the activity modification is applied in the VEC.

As you recall from the previous exercises, at.js 2.x prefetches and stores all qualified experiences in the cache on initial app load; as a user navigates through Views, Target pulls the experiences from the cache to deliver to the end user. But, as user behavior changes in session, these new functions update the cache and pull the current relevant Target offers based on changes in the visitor profile.

In this section, you will use these functions to pass in an mbox parameter and create a new activity in the VEC with a custom audience; in the following section, we will inspect how these functions update the offers a user is qualified for.


### Exercise 3.1

Implement `getOffer()` and `applyOffer()` in the Adobe Target React demo app to pass in product category ID when a visitor visits a product detail page.

1. Navigate to the `/utils` folder of the website source code and open the `targetHelpers.js` file in Brackets.
2. Here we have a `targetHelpers` helper object, where you will locate the `targetGetOffers()` function. Here you will use `getOffer()` to pass in the value for the `user.categoryId` key—a reserved attribute used for Target’s category affinity algorithm—to fetch the relevant experience based on this profile. 
3. Copy and paste the following code where commented on line 23 of the `targetHelpers.js` file:

               adobe.target.getOffer ({ 
                  "mbox": "target-global-mbox", 
                  "params": { 
                     "user.categoryId": this.category
                  }, 
                  "success": function (offers) { 
                     adobe.target.applyOffer ({ 
                        "mbox": "target-global-mbox", 
                        "offer": offers 
                     }); 
                  }, 
	               "error": function (status, error) {          
      	            console.log ('Error', status, error);
 	               }
               })


4. Save your file and reload your site.

5. The above code is sending a call to Target when a visitor views one or more product categories using Target’s category affinity (recency) algorithm. In the request, we are sending the category of the product the user viewed as the parameter `user.categoryId`. In conjunction, the `applyOffer()` function will handle the response to apply the relevant offer to the user. This will come into play when we create an Experience Targeting (XT) activity to personalize the homepage banner based on the category of the most recent product the user viewed.

> * <font size = 2>With at.js 2.X, there is no global mbox. The pageLoad object functionally handles what the global mbox does; the execute > pageLoad request accomplishes what the global mbox request does.  
> * When you use the Visual Experience Composer (VEC), the VEC will know which modifications should be applied with which selectors; although you do not need to specify the selector in your getOffer(), you do need to pass in the mbox name in order for Target to return the selector information in the request response, as we do in our sample code (Figure 2.1.1). In this example, the name is target-global-mbox, but it can be any name as long as it matches what is referenced in your implementation. *(Or is it only for backward compatibility?)*</font>


### Exercise 3.2

Create an Experience Targeting (XT) activity with custom audience.

1. Navigate back to the Adobe Target interface.
2. On the Activities list page, click *Create Activity* and this time choose the Experience Targeting option from the drop-down.
3. In the modal pop-up, leave the default selections for channel (web), Experience Composer (Visual), and Workspace (default) as is. Again, enter Activity URL as: `http://localhost:3000/user=<id>#/` where you will replace `<id>` with your unique user ID. Click Next.
4.	Name your activity using the following name and format: `L777 Personalized Slider by Category - <id>`. Replace `<id>` with your unique user ID.
5.	On the left-hand panel, click *+ Add Experience Targeting*. This will open the audience picker with list of audiences you can choose for your activity target. You’ll notice two tabs:
      - **Audience Library** tab: this is where you see 1) all of the default audiences auto-created for you in Target, 2) any audiences you create directly in the Target interface, and 3) any audiences shared from Adobe Analytics, Adobe Audience Manager, and/or the People Core Service via the Experience Cloud.
      - **Activity-Only Audience** tab: this is where you see any audiences that you create  just for a specific activity. "Activity-Only Audience" audiences exist within that activity and are not saved to the Audience Library.
6. To add, click *+ Create Audience*; you can be on either tab to create a new audience.
7. In the audience builder, click the “Save to this Activity-Only” radio button in the first setting of the workflow.
8. For the audience name, use the following name and format: `Visitors by Favorite Category - <category name> - <id>`. Replace `<id>` with your unique user ID.
9.	Next, click *+ Add Rule* under the Rules section. In the pop-up list, click on the “Visitor Profile” option (third option from the bottom). This will open a container where you will build your audience logic. Click the downward carat next to the “Select Attribute” drop-down to see the list of attribute options. These are default Target parameters, but in your production instance, you’d likely also see custom profile parameters passed in an mbox call.
10. Scroll through the list and select the Category Affinity attribute. In the drop-down that appears to the right, select “Favorite Category.” Recall we passed in the reserved `user.categoryId` parameter in our `getOffer()` script from Exercise 2.1 in order to use Target’s Category Affinity algorithm for audience targeting.
11. In the “Choose evaluator” drop-down, select “contains (case insensitive)”. In the value text box, type in the value “mens” and save.
![Create Audience builder](2020-02-27-17-47-48.png)
12. Repeat Steps 6-11 for the remaining product categories: kids, womens, and accessories. When finished, you should have 4 “Activity-Only” audiences in the Choose Audience modal. 
13. From your list of 4 audiences, click on the “Mens” category audience you first created and click Done. (You will repeat these next steps again for the remaining 3 categories later in Steps 19.)
14. Now you will see you newly created Experience B, targeting the audience “Visitors by Favorite Category – Mens” in the left panel on the page; Experience B should highlighted in the left panel to confirm that you are editing the right experience.  

      For this XT activity, we will be personalizing the first slide of the homepage slick-slider carousel based on a visitor’s favorite category. Click on the first slide of the slick-slider to highlight the image element then *Edit > Source* in the options menu.
15. Note the following image source URLs that have been pre-created for you. You will use these URLs in the next steps of this exercise as you set up your XT experience variations.

Category ID     | Slide Image Src
----------------|-------------------
 mens           | https://teehuggers.com/summit-2020-lab/imgs/summit-ex2-2-hp-banner-mens.jpg
 womens         | https://teehuggers.com/summit-2020-lab/imgs/summit-ex2-2-hp-banner-womens.jpg
 kids           | https://teehuggers.com/summit-2020-lab/imgs/summit-ex2-2-hp-banner-kids.jpg
 accessories    | https://teehuggers.com/summit-2020-lab/imgs/summit-ex2-2-hp-banner-accessories.jpg

16. In the “Edit Image Source” popup, replace the existing asset URL with the corresponding image URL above into the source link field and click Save. In this case, copy and paste the source URL for the men’s slide image. 
17. As expected, the image src change you made has been applied to the `HOME` View. Recall that at.js 2.x prefetches all offers on initial page load and stores them in the cache. However, since we are personalizing the variations based on in-session user activity, in order to update the cache based on the category passed in on the visitor’s profile, we must move this action to a `PAGE LOAD EVENT` (like we did with the Cart and Like buttons in the static navbar from Exercise 1.4). When calling `getOffer()` and `applyOffer()` from your app, you are sending a new server call to Target with the updated parameters and requesting an updated cache.
18. Hover over the modification, click the icon and move the action to `PAGE LOAD EVENT`.  
![Mens banner move to page load](2020-02-27-17-59-21.png)
19. On the left-hand panel, click *+ Add Experience Targeting*. This will open the audience picker with list of audiences you created in Steps 8-10.  
20. Repeat Steps 13-17 for the remaining audiences. Refer to Figure 2.2.4 for the image source URLs you will need when you repeat Step 18 for each of the remaining audiences:
      - Experience C - Visitors by Favorite Category - Womens
      - Experience D - Visitors by Favorite Category - Kids
      - Experience E - Visitors by Favorite Category - Accessories
21. Once your 5 experiences have been completed (Experience A being the default with no modifications, and Experiences B-E reflecting the modifications from the instructions above), click *Next* to move to the Targeting phase of the activity creation workflow.
22. On this screen, you will see each of the Activity-Only Audiences mapped to the Experiences you just created. Observe the note about the order of experiences and that “Visitors will see experiences in order, from top to bottom.” This indicates priority of which experiences should be displayed, should a visitor be matched to more than one audience criteria mapped to more than one experience.  
We will not deep dive into order priority in this lab; however, as a best practice, drag the default “All Visitors” audience (Experience A) and drop it into last position. Click *Next*.
23. For the Goals & Settings screen, use the same settings used previously when you created your A/B test activity by referring to the configurations detailed in Step 13 from Exercise 2.1. Once you’ve completed all of the fields, save and close your activity.

### Exercise 3.3

QA your XT activity.

1. Now, let’s move on to QA in order to understand why we implemented the `getOffer()` and `applyOffer()` functions and how these calls work in action.  
2. Navigate to the Overview tab for your XT activity. Under Activity Location, click on the Activity QA link to see the QA URLs for each experience. For the activity you just created in Exercise 3.2, Experience A is the default experience (no modifications or audiences applied), and Experiences B-E are personalized experiences applied to `PAGE LOAD EVENT` based on product category affinity.  
3. Unlike in the A/B activity, users here must match the custom audience that is mapped to each personalized experience. Therefore, in order to accurately QA the activity, switch the “Match audience rules to see experiences” toggle to the On position to get a single Activity entry link, rather than a QA link for each experience. Your visitor profile (if the profile parameters passed to Target match the mapped custom audience) will determine which experience you will see.  
![Match audience rules QA](2020-02-27-18-24-08.png)
4. Copy the single QA URL and paste it into a new browser tab. **DO NOT CLICK ON ANY OF THE PRODUCTS ON THE PAGE.**
5. Open the Inspector panel. Click on the Network tab and type “delivery” into the filter field to view the Adobe Target network calls. Click on the very first call in the grid to open the request details.  
6. Once again, notice that there is a new `execute` object whose value is `pageLoad`. This is your initial server call on app load (replaces the global mbox request). If you do not see the `execute` or `prefetch` objects in the request, make sure you are not looking at the `notification` call mentioned earlier in this lab.  
7. Expand the `execute` object and observe the empty array. As mentioned earlier, if you send page or profile parameters to Target on page load, you would see those parameters in this request. You will see an example of these as we proceed through this exercise.
8. Now examine the response from Target. Observe that in the `prefetch` object, Target is returning the name of the View and the A/B experience applied to that View from Exercise 1.4. Expand the `prefetch` object to see the response details.  
9. In `views > options` expand `content`. Again, you’ll see the modifications you made in your A/B activity’s experiences that are applied to this View. You will also see the XT activity name and experience id (0 or A, the default); however, you won’t see a content object because you have not yet matched one of the custom audiences.  
10. Expand `execute > pageLoad > options` and examine the content objects. Again, note that you do not see any content returned for the XT activity.  
11. Now let’s see what this looks like when the visitor profile is updated. Click on any of the product thumbnails, either in the Latest Products container on the homepage, or by clicking on the Products menu item in the top navigation.  
12. After you land on one of the product detail pages (the SingleProduct container we looked at earlier when examining the `getOffer()` and `applyOffer()` functions), navigate back to the homepage. You should see the first slide in the slick-slider update to the personalized experience mapped to the category of the product you just clicked on.  
13. Reopen the inspector and examine the Target delivery requests. Find the `execute > pageLoad` field and expand it. You should now see a `parameters` field; expand that and you should see the `user.categoryId` parameter for the product you just clicked, which is being passed in using `adobe.target.getOffer`.  
14. Examine the response from Target updating the content for the slick-slider. If you like, you can continue to click on other products of different categories, which will kick off additional `getOffer` calls. You can also see how Target tracks these different categories in order to compute the category positions when evaluating category affinity.  

> * <font size = 2>When using `triggerView()` to show targeting content in your SPA, flicker management is provided out of the box; pre-hiding logic does not need to be added manually. Instead, at.js 2.x pre-hides the location where your View will be shown prior to applying the targeted content.
> * Because both `getOffer()` and `applyOffer()` are low-level APIs, there is no built-in flicker control. You can pass a selector or HTML element as an option to `applyOffer()` to ensure that the targeted element is properly pre-hidden before invoking `getOffer()` and `applyOffer()`.</font>

15. You are now ready to go live with your XT activity. Navigate back to the tab where you have the Adobe Target interface open to the XT activity’s Overview tab. Click the dropdown with the default set to Inactive and click on the Activate option.  

   That’s it! You have now completed the exercises in this lab.

# Lesson 4 - Bonus : Introduction to Adobe Target v2 extension in Launch, by Adobe

## Objective

Review how to use Adobe Target v2 extension in Launch for at.js 2.2 deployment.

## Lesson Context

Launch, by Adobe is the next generation of tag management capabilities from Adobe Experience Cloud. Launch gives customers like you a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.

Launch empowers you to build and maintain your own integrations with Launch extensions. These extensions are available to Launch customers in an app store experience so you can quickly install, configure, and deploy your tags.

Launch is offered to Adobe Experience Cloud customers as an included, value-add feature. Launch is an entirely new product with a new code base, designed to replace the previous Dynamic Tag Management (DTM) service.

**Key benefits:**
- Quick and easy deployment of Adobe and non-Adobe, client-side technologies
- Precise organization and management of libraries
- Robust approval workflows
- Granular rights management

Additionally, there are improvements for customers implementing Launch on single page applications, including Adobe Target 2.x. We won’t go into these in deep detail, but if you’re familiar with DTM, here’s a highlight of just some of the key differentiators:
- There are no longer specific rule builders for Page Load, Event-Based, or Direct Call type rules. You create a general rule and set the event trigger for that rule.
- The Adobe Target “tool” could only be configured to fire a global mbox from a Page Load rule; it could not be triggered with an event or by a direct call in DTM.
- You can now stack rules and set multiple variables and actions, with orders of operation, into a single rule. 
- You can also set an order of operations for rules that use the same event, such as multiple rules that have explicit orders set (1, 2, 3, etc.) to fire when the same event (for example, `onUpdate` in React or `$locationChangeSuccess` in Angular) is broadcasted.
- You can configure multiple actions across extensions in a single rule. This means that you can have an Experience Cloud ID Service action set in the same rule along with Adobe Target and Adobe Analytics extensions, for example.
- There are many more features that benefit single page app deployments not listed here, including options for Adobe Analytics customers to clear variable values in a set order in a rule with other Adobe Analytics actions. We invite you to check out this blog post on why [Launch is better for SPAs](https://medium.com/launch-by-adobe/the-top-5-reasons-that-launch-is-better-for-single-page-applications-5a7b9880939f).

> <font size = 2>If you currently use DTM and have not yet upgraded to Launch, we strongly encourage you to refer to these resources to take advantage of tools to facilitate your migration so that you have instrumented your Launch tags prior to the sunset date of January 2021.</font>

### Exercise 4.1

Explore the Adobe Target v2 extension in Launch.

1. Click on the dot grid in the top right navigation to open the solution picker; in the far-right column, click the Launch menu option. Or, log back into the Adobe Experience Cloud and jump to Launch using the quick access link from the homepage.

2. On the Activation page, click on the Adobe Experience Cloud Launch tile.
3. In the Properties list, click on the “L777 Adobe Target React App” property.

...

# Additional Resources

* [Single Page Application Implementation](https://docs.adobe.com/content/help/en/target/using/implement-target/client-side/deploy-at-js/target-atjs-single-page-application.html)

* [Implement Adobe Target's at.js 2.0 in a Single Page Application (SPA)](https://docs.adobe.com/content/help/en/target-learn/tutorials/implementation/implement-atjs-20-in-a-single-page-application.html#)

* [Adobe Target React demo app](https://target.enablementadobe.com/react/hashchange/#/)

* [adobe.target.triggerView (viewName, options) - at.js 2.x](https://docs.adobe.com/content/help/en/target/using/implement-target/client-side/functions-overview/adobe-target-triggerview-atjs-2.html)

* [adobe.target.getOffers(options) - at.js 2.x](https://docs.adobe.com/content/help/en/target/using/implement-target/client-side/functions-overview/adobe-target-getoffers-atjs-2.html)

* [adobe.target.applyOffers(options) - at.js 2.x](https://docs.adobe.com/content/help/en/target/using/implement-target/client-side/functions-overview/adobe-target-applyoffers-atjs-2.html)

* [Upgrading from at.js 1.x to at.js 2.x](https://docs.adobe.com/content/help/en/target/using/implement-target/client-side/upgrading-from-atjs-1x-to-atjs-20.html)