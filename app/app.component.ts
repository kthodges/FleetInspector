import {
  Component, ChangeDetectorRef 
} from '@angular/core';

/* AWS AUTH */
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState
} from '@aws-amplify/ui-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FleetInspector';

  /* AWS AUTH */
  user: CognitoUserInterface | undefined;
  authState!: AuthState;

  /* AWS AUTH */

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
