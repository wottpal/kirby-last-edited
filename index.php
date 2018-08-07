<?php

Kirby::plugin('wottpal/last-edited', [

  'translations' => [
    'en' => [
      'lastedited' => 'Last Edited'
    ],
    'de' => [
      'lastedited' => 'Zuletzt Editiert'
    ]
  ],

  // TODO Multiple Hooks with same callback
  // TODO Add hooks for site as well
  'hooks' => [
    'page.update:after' => function ($newPage, $oldPage) {
      $newPage->update([
        'lastEdited' => date('Y-m-d H:i:s')
      ], false);
    },
    'page.create:after' => function ($page) {
      $page->update([
        'lastEdited' => date('Y-m-d H:i:s')
      ], false);
    }
  ],

  'fields' => [
    'lastEdited' => [
      'props' => [
        'value' => function ($value = null) {
          return $value;
        }
      ],
    ],
  ]

]);
