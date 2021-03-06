import * as LogManager from 'aurelia-logging';

/**
* Represents a disposable subsciption to an EventAggregator event.
*/
export declare interface Subscription {
  
  /**
    * Disposes the subscription.
    */
  dispose(): void;
}

/**
* Enables loosely coupled publish/subscribe messaging.
*/
/**
* Enables loosely coupled publish/subscribe messaging.
*/
export declare class EventAggregator {
  
  /**
    * Creates an instance of the EventAggregator class.
    */
  constructor();
  
  /**
    * Publishes a message.
    * @param event The event or channel to publish to.
    * @param data The data to publish on the channel.
    */
  publish(event: string | any, data?: any): void;
  
  /**
    * Subscribes to a message channel or message type.
    * @param event The event channel or event data type.
    * @param callback The callback to be invoked when when the specified message is published.
    */
  subscribe(event: string | Function, callback: Function): Subscription;
  
  /**
    * Subscribes to a message channel or message type, then disposes the subscription automatically after the first message is received.
    * @param event The event channel or event data type.
    * @param callback The callback to be invoked when when the specified message is published.
    */
  subscribeOnce(event: string | Function, callback: Function): Subscription;
}

/**
* Includes EA functionality into an object instance.
* @param obj The object to mix Event Aggregator functionality into.
*/
export declare function includeEventsIn(obj: Object): EventAggregator;

/**
* Configures a global EA by merging functionality into the Aurelia instance.
* @param config The Aurelia Framework configuration object used to configure the plugin.
*/
export declare function configure(config: Object): void;