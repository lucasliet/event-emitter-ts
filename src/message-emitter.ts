const topics = new Map<string, any>();

/**
 * Publish a topic with given arguments
 * @param topic topic to register
 * @param args args to save in topic
 */
export function publish(topic: string, ...args: any[]) {
  topics.set(topic, args)
}

/**
 * Execute a callback function within the provided topic args
 * @param topic topic to subscribe from
 * @param callback callback function to execute with arguments published on given topic
 * @returns provided callback function return
 */
export function subscribe(topic: string, callback: (args?: any[]) => any) {
  return callback(topics.get(topic));
}

/**
 * Delete given topic saved arguments
 * @param topic topic to delete
 */
export function deleteTopic(topic: string) { 
  topics.delete(topic);
}

/**
 * Check if given topic exists
 * @param topic topic to check existence
 * @returns true if topic exists, otherwise false
 */
export function hasTopic(topic: string) {
  return topics.has(topic);
}