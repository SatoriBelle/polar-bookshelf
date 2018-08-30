import {IPersistenceLayer} from '../datastore/PersistenceLayer';
import {Launcher} from './Launcher';
import {Logger} from '../logger/Logger';
import {ElectronPersistenceLayerFactory} from '../datastore/ElectronPersistenceLayerFactory';

const log = Logger.create();

function persistenceLayerFactory(): IPersistenceLayer {
    let electronPersistenceLayer = ElectronPersistenceLayerFactory.create();
    //return new PersistenceLayerDispatcher(PersistenceLayerWorkers.create(), electronPersistenceLayer);
    return electronPersistenceLayer;
}

new Launcher(persistenceLayerFactory).launch()
    .then(() => log.info("App now loaded."))
    .catch(err => log.error(err));
