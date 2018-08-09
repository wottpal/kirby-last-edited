# Kirby Last Edited

![MIT](https://img.shields.io/badge/Kirby-3-green.svg)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wottpal/kirby-anchor-headings/master/LICENSE)

A Kirby 3 field which either:

* shows the date and time of the last page-update in the panel (saved in a custom field)
* or shows the `modified` value of the page (from the metadata of the content-file).


## Usage

### Metadata

Put this field in your pages blueprint:

```yaml
lastEdited:
  type: lastEdited
  source: metadata
```

Access the date in your templates like `<?= $page->modified()->toDate('d.m.Y') ?>`.


### Custom Field updated on Panel-Hooks

Put this field in your pages blueprint:

```yaml
lastEdited:
  type: lastEdited
  source: field
```

Access the date in your templates like `<?= $page->lastEdited()->toDate('d.m.Y') ?>`.
