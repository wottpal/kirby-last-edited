# Kirby Last Edited

![MIT](https://img.shields.io/badge/Kirby-3-green.svg)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wottpal/kirby-anchor-headings/master/LICENSE)

A Kirby 3 field which contains the date and time of the last page-update in the panel.


## Usage

Put this field in your pages blueprint and you are all set:

```yaml
lastEdited:
  type: lastEdited
```

Access the date in your templates like:

```php
Last Updated: <?= $page->lastEdited()->toDate('d.m.Y') ?>
```
