/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';
import { getResourceEndpointOnFilesApi as getResourceEndpoint } from '../properties/files-api-endpoints';

class EventService {
  /**
   * Returns the event with the given reference.
   *
   * @param {String} eventReference the given event reference
   *
   * @returns the required event
   */
  static async getEventByReference(eventReference) {
    const result = await fetch(getResourceEndpoint('events', eventReference), { cache: 'no-store' })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return { error: getErrorMessage(errorMessagesKeys.eventNotFound) };
        }
      })
      .catch(() => {
        return { error: getErrorMessage(errorMessagesKeys.networkError) };
      });

    return result;
  }
}

export { EventService };
