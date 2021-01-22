import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


//TODO: Export this interfaces to models or something
export interface State {
  
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  currentState: BehaviorSubject<State> = new BehaviorSubject({
    termsAccepted: false,
    user: { email: undefined }
  })

  constructor() {
    this.initialize();
  }

  /**
   * Initialize appState
   */
  initialize() {
    this.loadLocalState()
      .then((state: State) => this.currentState.next(state))
  }

  /**
   * Returns a listener to current State
   */
  currentStateListener(): BehaviorSubject<State> {
    return this.currentState
  }

  /**
   * Return appState value from AppState
   *
   */
  getCurrentState(): State {
    return this.currentState.getValue()
  }

  /**
   * Updates current state
   * @param newState State
   */
  setCurrentState(newState: State): void {
    const currentState = this.currentState.getValue()
    const state = {
      ...currentState,
      ...newState
    }
    this.currentState.next(state)
    this.saveLocalState(state)
  }

  /**
   * Clear appState
   */
  clearState(): void {
    this.currentState.next({
      termsAccepted: false,
      user: { email: undefined }
    })
  }

  /**
   * Save current state to localStorage
   * @param state State
   */
  private saveLocalState(state: State): void {
    localStorage.setItem('state', JSON.stringify(state))
  }

  /**
   * Load state from localStorage
   */
  private async loadLocalState(): Promise<State> {
    const loadedState = await localStorage.getItem('state')
    if (loadedState) {
      const appState = JSON.parse(loadedState)
      console.log('State updated from localStorage', appState)
      return Promise.resolve(appState)
    } else {
      console.log('No state to be loaded')
      return Promise.reject(false)
    }
  }

}
