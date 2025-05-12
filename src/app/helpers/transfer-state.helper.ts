import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState, StateKey } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export function useTransferState<T>(
  platformId: Object,
  transferState: TransferState,
  keyName: string,
  fetchFn: () => Observable<T>
): Observable<T> {
  const STATE_KEY = makeStateKey<T>(keyName);

  if (transferState.hasKey(STATE_KEY)) {
    const data = transferState.get<T>(STATE_KEY, {} as T);
    transferState.remove(STATE_KEY); // clear after reading
    return of(data);
  }

  if (isPlatformServer(platformId)) {
    return fetchFn().pipe(
      tap((data) => {
        transferState.set(STATE_KEY, data);
      })
    );
  }

  return fetchFn();
}
