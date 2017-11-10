import { Observable } from "rxjs/Observable";
import { CollectionViewer } from "./collection-viewer";

export class DataSource<T> {
    public connect(collectionViewer: CollectionViewer): Observable<Array<T>> {
        throw new Error();
    }

    public disconnect(collectionViewer: CollectionViewer): void {

    }
}