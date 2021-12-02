# Toasting Demo

## About this

This is just a quick concept, i've had done for a job interview and test. They wanted to qualify my React and coding skills.

As you can see... i'm not up-to-date in react (like missing react-context, which would be more helpful, or react-hooks), 
but i think react is simple to learn and i can rise my skills to the next level quickly :-)

**Time available for the test:** 2 days

**Effective time required:** 3 hours

## Concept ideas

* Optics is defined via (S)CSS. Thus it is centrally controllable and is not influenced by the developer.
* Smaller adjustments can still be overwritten quickly and easily via CSS Custom Properties.
* The layout is flexibly expandable, e.g. for modals instead of toasts. Therefore "error codes" (Integer) were omitted,
  and instead worked with key strings.
* The string type also makes it easier to identify the type of message.


* For global availability, it is a standalone object which is responsive via JS.
* It should be self-managed so that the developer (dev) can use it as easily as possible, without having to consider
  on individual elements (components) must take.
* Through a central container, the items should also be managed. Thereby there is a centralized control.
* Each Toast/Modal should manage its own data, for a loose coupling.


* The initialization of an element should be as simple as possible ( showSimpleMessage(...) ).
* Optionally, it should be possible to display more complex data (modals, etc.) (showExtendedMessage(...)).
  In this variant, it is then allowed to enter all forms of data (HTML, buttons, components, etc.).

## Server Messages

* Messages should also be able to be mapped by the backend.
* For security these should not contain complex data (plain text)
* Via a JS function this should be easy to process,
  so that it can be solved in a callback (or Promise).

### Example

    { "messages": [
        { "uid": 12345, error_code: "F01238", "type": "error", "title": "A good readable Headline", "message": "This is a detailed error message" },
        { "uid": 12345, error_code: "F01238", "type": "info", "title": "A good readable Headline", "message": "This is a detailed error message" },
        { "uid": 12345, error_code: "F01238", "type": "warning", "title": "A good readable Headline", "message": "This is a detailed error message" },
      ] 
    }

### Security

Even if the data comes from a trusted backend, the data must NEVER be transferred just like that.
A check and cleanup should be done. For example the type must be only a fixed selection, or minimal
filtered by regular expressions to e.g. only letters. The same applies to the other key/value pairs.

## Enhancement possibilities (Todo)

* Improve Responsive Layout (CSS etc.)
* Optics fine tuning (Icons, Cross, etc.)
* Demo extend / more complex (routing example, control outside the element by e.g. buttons, ...)


* Add listener or observer, so that message types can be reacted to and interactions can be performed.
  can be performed. This allows certain elements to be locked in the design until an action has been performed.


* Positioning: A fixed or variable configurable positioning could be practicable for layouts,
  independent of the CSS


* Convert code to React hooks and context for e.g. easier state handling
* Wrap toast in a module for easier operation / handling.

## FAQ

Why did I choose a central store?

    The intuitive management of a central state (States) is easier in a Redux Store.
     
    One possibility would have been to always change the properties and pass them through to the component.
    However, this could have led to strong dependencies and no stronger separation of data and view.

    In addition, a central store allows anyone to "hang on" and control other events,
    or "eavesdrop". Data centralization (module A) and components (module B) only use this.

Why does the Toast container have to be included in the app, and not automatically when using an "addMessage"?

    It would have been certainly user-friendly, if one did not have to decide where the message container is included. 
    Nevertheless, there are scenarios where one might want to output independent messages. Here it is helpful
    to decide whether the message container must/should still be encapsulated.

What else would you optimize?

    Everything ;-)
    
    On the one hand, I would put more thought into the architecture, specifically for the application purpose.
    Furthermore, the possibilities and the operation do not please me yet. Likewise the structure could
    become still more tidy. The whole thing should then be outsourced in a module.
