import classes from './Notification.module.css';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Notification = () => {
    const notification = useSelector(state => state.ui.notification);
    let specialClass;
    const status = notification ? notification.status : null;
    switch (status) {
        case 'success':
            specialClass = classes.success;
            break
        case 'error':
            specialClass = classes.error;
            break
        case 'pending':
            specialClass = classes.pending;
            break
        default:
            specialClass = '';
            break
    }

    const cssClasses = `${classes.notification} ${specialClass}`;
    return (
        <Fragment>
            {
                notification &&
                <main className={cssClasses}>
                    <p className={classes.title}>{notification.title}</p>
                    <p className={classes.message}>{notification.message}</p>

                </main>
            }
        </Fragment>
    );
}

export default Notification;