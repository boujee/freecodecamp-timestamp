'use strict';

import {app} from '..';

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on ${port}`));