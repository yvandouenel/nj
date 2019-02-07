A demonstration of a simple import of a JSON file.

REQUIREMENTS
============
You need the contrib modules Migrate Plus and Migrate Tools.
To make the products.json file available for import, the file will be copied
from the artifacts folder to your sites/default/files folder.

USAGE
=====
Enable the module, check status, import all products and rollback with Drush
drush en migrate_crealead
drush migrate-status
drush migrate-import brand or article
drush migrate-rollback brand

Attention pour que les modifications soient prises en compte, il faut :
 - faire un rollback
 - désactiver le module
 - faire les modifications
 - réactivier le module

drush migrate-rollback brand
drush pmu migrate_crealead -y // permet de désactiver le module
...
drush en migrate_crealead -y

See config/optional/migrate_plus.migration.product.yml for details about the
migration.

Thanks to Jeff Geerling and Christophe for the original code:
- https://www.jeffgeerling.com/blog/2016/migrate-custom-json-feed-drupal-8-migrate-source-json
- https://colorfield.be/blog/drupal-8-json-custom-migration
