class Post < ApplicationRecord
  mount_uploader :picture, ImageUploader
  mount_uploader :music, AudioUploader
  with_options presence: true do
    validates :title
    validates :music
    validates :music_type
  end
  enum music_type: {
    Voice: 0,
    Tune: 1,
    Collabolated: 2
  }
  belongs_to :user
  has_many :comments, dependent: :destroy
end
