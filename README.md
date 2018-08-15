# Nodux

What if I used Redux to do CQRS and Event Sourcing in Node?

## Scenario

Based on the well known [CQRS.nu](http://www.cqrs.nu) example, we are going
to write an application meant to handle orders in a cafeteria.

This is the list of events we are about to handle (you can read more [here](http://www.cqrs.nu/tutorial/cs/01-design)):

```
TABLE_OPENED
DRINKS_ORDERED
DRINKS_CANCELLED
DRINKS_SERVED
TABLE_CLOSED
```

These are the commands

```
OPEN_TABLE
PLACE_ORDER
AMEND_ORDER
MARK_DRINKS_SERVED
CLOSE_TABLE
```

These are the exceptions

```
CannotCancelServedItem
CannotServeUnavailableItem

```

### Why this experiment is doomed to fail?

1) One of the cool things about CQRS is that you can scale Command and Query layers independently, here you can't
2) 


## What I don't understand yet

- How to handle errors?
- If I wanted to use EventSourcing here, should I have one or more event bus?
    - More event buses namely: one subscribed to the store, one which emits events associated to queries and commands (???)
    - One EventBus which is responsible of dispatching events to trigger actions and commands AND reatcing to state changes (<- looks better right now)